import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ThemeService } from '../../service/theme.service';
import { EmailService, EmailData } from '../../service/email.service';
import { IntersectionObserverDirective } from '../../directive/intersection-observer.directive';

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
  imports: [ReactiveFormsModule, CommonModule, IntersectionObserverDirective],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private http = inject(HttpClient);
  private themeService = inject(ThemeService);
  emailService = inject(EmailService);

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
      label: 'Elogio',
      icon: 'fas fa-heart',
      description: 'Compartilhe seu feedback positivo'
    },
    {
      value: 'proposta',
      label: 'Proposta de Trabalho',
      icon: 'fas fa-briefcase',
      description: 'Oportunidades profissionais'
    },
    {
      value: 'orcamento',
      label: 'Orçamento',
      icon: 'fas fa-calculator',
      description: 'Solicite um orçamento personalizado'
    },
    {
      value: 'curiosidade',
      label: 'Curiosidade',
      icon: 'fas fa-question-circle',
      description: 'Tire suas dúvidas técnicas'
    },
    {
      value: 'sugestao',
      label: 'Sugestão',
      icon: 'fas fa-lightbulb',
      description: 'Compartilhe suas ideias'
    },
    {
      value: 'colaboracao',
      label: 'Colaboração',
      icon: 'fas fa-handshake',
      description: 'Vamos trabalhar juntos'
    }
  ];

  // Contact information
  contactInfo: ContactInfo[] = [
    {
      type: 'email',
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'diego.dev.contato@gmail.com',
      link: 'mailto:diego.dev.contato@gmail.com'
    },
    {
      type: 'phone',
      icon: 'fas fa-phone',
      label: 'Telefone',
      value: '+55 (11) 99999-9999',
      link: 'tel:+5511999999999'
    },
    {
      type: 'location',
      icon: 'fas fa-map-marker-alt',
      label: 'Localização',
      value: 'São Paulo, Brasil'
    },
    {
      type: 'social',
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
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

    if (control.errors['required']) return `${this.getFieldLabel(fieldName)} é obrigatório`;
    if (control.errors['email']) return 'Email inválido';
    if (control.errors['minlength']) return `${this.getFieldLabel(fieldName)} muito curto`;
    if (control.errors['pattern']) return 'Formato inválido';

    return 'Erro de validação';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: Record<string, string> = {
      nome: 'Nome',
      email: 'Email',
      telefone: 'Telefone',
      tipo: 'Tipo de contato',
      mensagem: 'Mensagem'
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
          throw new Error('Falha no envio do email');
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
        error.message || 'Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.'
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
