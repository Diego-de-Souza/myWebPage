import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RotatingLogoComponent } from '../rotating-logo/rotating-logo.component';
import { ThemeService } from '../../service/theme.service';
import { DownloadService } from '../../service/download.service';

interface HeroAction {
  label: string;
  icon: string;
  action: () => void;
  primary: boolean;
}

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [CommonModule, RotatingLogoComponent],
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  private router = inject(Router);
  private themeService = inject(ThemeService);
  private downloadService = inject(DownloadService);

  // Signals
  currentTextIndex = signal(0);
  isTyping = signal(false);
  displayText = signal('');
  
  // Dados dinâmicos
  heroTexts: string[] = [
    'Desenvolvedor Full Stack',
    'Engenheiro de Software',
    'Especialista Angular',
    'Arquiteto de Soluções',
    'Criador de Experiências'
  ];
  
  heroActions: HeroAction[] = [
    {
      label: 'Ver Projetos',
      icon: 'fas fa-rocket',
      action: () => this.scrollToSection('modern-portfolio'),
      primary: true
    },
    {
      label: 'Contato',
      icon: 'fas fa-envelope',
      action: () => this.router.navigate(['/contato']),
      primary: false
    },
    {
      label: 'Download CV',
      icon: 'fas fa-download',
      action: () => this.downloadCV(),
      primary: false
    }
  ];

  // Computed properties
  currentTheme = computed(() => this.themeService.currentTheme());
  
  // Dados pessoais
  personalInfo = {
    name: 'Diego de Souza',
    title: 'Desenvolvedor Full Stack',
    location: 'São Paulo, Brasil',
    experience: '3+ anos',
    description: 'Apaixonado por tecnologia e inovação, criando soluções digitais que fazem a diferença.',
    skills: ['Angular', 'TypeScript', 'Node.js', 'C#', '.NET', 'SQL']
  };

  ngOnInit(): void {
    this.startTypewriterEffect();
  }

  private startTypewriterEffect(): void {
    this.typeText();
  }

  private async typeText(): Promise<void> {
    const text = this.heroTexts[this.currentTextIndex()];
    this.isTyping.set(true);
    this.displayText.set('');

    // Typing effect
    for (let i = 0; i <= text.length; i++) {
      this.displayText.set(text.substring(0, i));
      await this.delay(100);
    }

    await this.delay(2000); // Pause at end

    // Erasing effect
    for (let i = text.length; i >= 0; i--) {
      this.displayText.set(text.substring(0, i));
      await this.delay(50);
    }

    // Move to next text
    this.currentTextIndex.update(index => 
      (index + 1) % this.heroTexts.length
    );

    this.isTyping.set(false);
    await this.delay(500);
    
    // Continue loop
    this.typeText();
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private downloadCV(): void {
    this.downloadService.downloadCV();
  }

  onActionClick(action: HeroAction): void {
    action.action();
  }
}
