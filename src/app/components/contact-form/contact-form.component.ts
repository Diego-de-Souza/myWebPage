import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ThemeService } from '../../service/theme.service';
import { EmailService, EmailData } from '../../service/email.service';
import { IntersectionObserverDirective } from '../../directive/intersection-observer.directive';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface ContactType {
  value: string;
  label: string;
  icon: string;
  description: string;
}

interface FormFieldState {
  touched: boolean;
  focused: boolean;
  valid: boolean;
}

interface ContactInfo {
  type: 'email' | 'phone' | 'location' | 'social';
  icon: string;
  label: string;
  value: string;
  link?: string;
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, IntersectionObserverDirective, TranslateModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private http = inject(HttpClient);
  private themeService = inject(ThemeService);
  emailService = inject(EmailService);
  private translate = inject(TranslateService);

  // Signals
  contatoForm!: FormGroup;
  isSubmitting = signal(false);
  submitSuccess = signal(false);
  submitError = signal('');
  fieldStates = signal<Record<string, FormFieldState>>({});
  formVisible = signal(false);
  
  // Computed
  currentTheme = computed(() => this.themeService.currentTheme());
  
  // Contact types
  contactTypes: ContactType[] = [
    {
      value: 'elogio',
      label: 'contact.types.praise.title',
      icon: 'fas fa-heart',
      description: 'contact.types.praise.desc'
    },
    {
      value: 'proposta',
      label: 'contact.types.jobProposal.title',
      icon: 'fas fa-briefcase',
      description: 'contact.types.jobProposal.desc'
    },
    {
      value: 'orcamento',
      label: 'contact.types.quote.title',
      icon: 'fas fa-calculator',
      description: 'contact.types.quote.desc'
    },
    {
      value: 'curiosidade',
      label: 'contact.types.question.title',
      icon: 'fas fa-question-circle',
      description: 'contact.types.question.desc'
    },
    {
      value: 'sugestao',
      label: 'contact.types.suggestion.title',
      icon: 'fas fa-lightbulb',
      description: 'contact.types.suggestion.desc'
    },
    {
      value: 'colaboracao',
      label: 'contact.types.collaboration.title',
      icon: 'fas fa-handshake',
      description: 'contact.types.collaboration.desc'
    }
  ];

  // Contact information
  contactInfo: ContactInfo[] = [
    {
      type: 'email',
      icon: 'fas fa-envelope',
      label: 'contact.info.email',
      value: 'diegodesouza.souza@gmail.com',
      link: 'mailto:diegodesouza.souza@gmail.com'
    },
    {
      type: 'phone',
      icon: 'fas fa-phone',
      label: 'contact.info.phone',
      value: '+55 (11) 961969969',
      link: 'tel:+5511961969969'
    },
    {
      type: 'location',
      icon: 'fas fa-map-marker-alt',
      label: 'contact.info.location',
      value: 'footer.contact.location'
    },
    {
      type: 'social',
      icon: 'fab fa-linkedin',
      label: 'contact.info.linkedin',
      value: '/in/diegodesouza-devweb',
      link: 'https://www.linkedin.com/in/diegodesouza-devweb/'
    }
  ];

  ngOnInit(): void {
    this.initializeForm();
    this.initializeFieldStates();
    
    // Simulate form loading animation
    setTimeout(() => {
      this.formVisible.set(true);
    }, 300);
  }

  private initializeForm(): void {
    this.contatoForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern('^[0-9]{10,11}$')]],
      tipo: ['', Validators.required],
      mensagem: ['', [Validators.required, Validators.minLength(10)]]
    });

    // Setup form listeners
    Object.keys(this.contatoForm.controls).forEach(key => {
      const control = this.contatoForm.get(key);
      if (control) {
        control.valueChanges.subscribe(() => {
          this.updateFieldState(key);
        });
      }
    });
  }

  private initializeFieldStates(): void {
    const initialStates: Record<string, FormFieldState> = {};
    Object.keys(this.contatoForm.controls).forEach(key => {
      initialStates[key] = {
        touched: false,
        focused: false,
        valid: false
      };
    });
    this.fieldStates.set(initialStates);
  }

  private updateFieldState(fieldName: string): void {
    const control = this.contatoForm.get(fieldName);
    if (control) {
      this.fieldStates.update(states => ({
        ...states,
        [fieldName]: {
          ...states[fieldName],
          valid: control.valid,
          touched: control.touched
        }
      }));
    }
  }

  onFieldFocus(fieldName: string): void {
    this.fieldStates.update(states => ({
      ...states,
      [fieldName]: {
        ...states[fieldName],
        focused: true
      }
    }));
  }

  onFieldBlur(fieldName: string): void {
    const control = this.contatoForm.get(fieldName);
    if (control) {
      control.markAsTouched();
    }
    
    this.fieldStates.update(states => ({
      ...states,
      [fieldName]: {
        ...states[fieldName],
        focused: false,
        touched: true
      }
    }));
  }

  getFieldState(fieldName: string): FormFieldState {
    return this.fieldStates()[fieldName] || { touched: false, focused: false, valid: false };
  }

  getFieldError(fieldName: string): string {
    const control = this.contatoForm.get(fieldName);
    if (!control || !control.errors || !control.touched) return '';

    if (control.errors['required']) {
      return this.translate.instant('contact.validation.required', {
        field: this.translate.instant(this.getFieldLabelKey(fieldName))
      });
    }
    if (control.errors['email']) return this.translate.instant('contact.validation.email');
    if (control.errors['minlength']) {
      return this.translate.instant('contact.validation.minLength', {
        field: this.translate.instant(this.getFieldLabelKey(fieldName))
      });
    }
    if (control.errors['pattern']) return this.translate.instant('contact.validation.pattern');

    return this.translate.instant('contact.validation.generic');
  }

  private getFieldLabelKey(fieldName: string): string {
    const labels: Record<string, string> = {
      nome: 'contact.form.name.label',
      email: 'contact.form.email.label',
      telefone: 'contact.form.phone.label',
      tipo: 'contact.form.type.label',
      mensagem: 'contact.form.message.label'
    };
    return labels[fieldName] || fieldName;
  }

  getContactTypeInfo(value: string): ContactType | undefined {
    return this.contactTypes.find(type => type.value === value);
  }

  async onSubmit(): Promise<void> {
    if (this.contatoForm.invalid) {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contatoForm.controls).forEach(key => {
        this.contatoForm.get(key)?.markAsTouched();
        this.updateFieldState(key);
      });
      return;
    }

    this.isSubmitting.set(true);
    this.submitError.set('');

    try {
      const formData: EmailData = this.contatoForm.value;
      
      // Verificar se o EmailJS está configurado
      if (this.emailService.isConfigured()) {
        // Enviar via EmailJS
        const success = await this.emailService.sendEmail(formData);
        
        if (success) {
          this.submitSuccess.set(true);
          this.contatoForm.reset();
          this.initializeFieldStates();
          
          // Reset success message after 8 seconds
          setTimeout(() => {
            this.submitSuccess.set(false);
          }, 8000);
        } else {
          throw new Error(this.translate.instant('contact.errors.sendFailed'));
        }
      } else {
        // Fallback: usar mailto
        this.emailService.sendEmailViaMailto(formData);
        this.submitSuccess.set(true);
        this.contatoForm.reset();
        this.initializeFieldStates();
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          this.submitSuccess.set(false);
        }, 5000);
      }

    } catch (error: any) {
      console.error('Erro ao enviar mensagem:', error);
      this.submitError.set(
        error.message || this.translate.instant('contact.errors.generic')
      );
    } finally {
      this.isSubmitting.set(false);
    }
  }



  onFormVisible(isVisible: boolean): void {
    if (isVisible) {
      this.formVisible.set(true);
    }
  }

  resetForm(): void {
    this.contatoForm.reset();
    this.submitSuccess.set(false);
    this.submitError.set('');
    this.initializeFieldStates();
  }
}
