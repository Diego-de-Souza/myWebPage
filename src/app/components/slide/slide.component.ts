import { Component, OnDestroy, OnInit, signal, computed, inject } from '@angular/core';
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
export class SlideComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private themeService = inject(ThemeService);
  private downloadService = inject(DownloadService);
  private destroyed = false;
  private readonly chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/=+_';
  currentTextIndex = signal(0);
  isTyping = signal(false);
  displayText = signal('');
  displayName = signal('Diego - Dev');

  heroTexts: string[] = [
    'Desenvolvedor Fullstack',
    'Especialista em Node.js e Angular',
    'Engenheiro da Computação',
    'Arquiteto de Sistemas e Solucoes',
    'Profissional AWS Cloud Certified'
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

  currentTheme = computed(() => this.themeService.currentTheme());

  personalInfo = {
    name: 'Diego de Souza',
    title: 'Desenvolvedor Full Stack',
    location: 'Sao Paulo, Brasil',
    experience: '4+ anos',
    description: 'Apaixonado por tecnologia e inovacao, criando solucoes digitais de alto impacto.',
    skills: ['Angular', 'TypeScript', 'Node.js', 'AWS', 'NestJS', 'Python', 'SQL']
  };

  ngOnInit(): void {
    this.startNameScramble(this.displayName(), 1150);
    this.startTypewriterEffect();
  }

  ngOnDestroy(): void {
    this.destroyed = true;
  }

  private startTypewriterEffect(): void {
    this.typeText();
  }

  private async typeText(): Promise<void> {
    if (this.destroyed) {
      return;
    }
    const text = this.heroTexts[this.currentTextIndex()];
    this.isTyping.set(true);
    this.displayText.set('');

    for (let i = 0; i <= text.length; i++) {
      if (this.destroyed) {
        return;
      }
      this.displayText.set(text.substring(0, i));
      await this.delay(75);
    }

    await this.delay(1800);

    for (let i = text.length; i >= 0; i--) {
      if (this.destroyed) {
        return;
      }
      this.displayText.set(text.substring(0, i));
      await this.delay(40);
    }

    this.currentTextIndex.update((index) => (index + 1) % this.heroTexts.length);
    this.isTyping.set(false);
    await this.delay(350);
    this.typeText();
  }

  private startNameScramble(finalText: string, duration = 1000): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.displayName.set(finalText);
      return;
    }
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const revealCount = Math.floor(finalText.length * progress);
      const value = finalText
        .split('')
        .map((char, index) => {
          if (char === ' ') {
            return ' ';
          }
          return index < revealCount
            ? finalText[index]
            : this.chars[Math.floor(Math.random() * this.chars.length)];
        })
        .join('');
      this.displayName.set(value);
      if (progress < 1 && !this.destroyed) {
        requestAnimationFrame(tick);
      } else {
        this.displayName.set(finalText);
      }
    };
    requestAnimationFrame(tick);
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private downloadCV(): void {
    this.downloadService.downloadCV();
  }

  onActionClick(action: HeroAction): void {
    action.action();
  }
}
