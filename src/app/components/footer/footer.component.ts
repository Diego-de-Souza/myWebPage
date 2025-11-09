import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ThemeService } from '../../service/theme.service';
import { DownloadService } from '../../service/download.service';

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
  color: string;
}

interface FooterSection {
  title: string;
  links: { label: string; action: () => void }[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  private router = inject(Router);
  private themeService = inject(ThemeService);
  private downloadService = inject(DownloadService);

  // Signals
  currentYear = signal(new Date().getFullYear());
  
  // Computed
  currentTheme = computed(() => this.themeService.currentTheme());

  // Social Links
  socialLinks: SocialLink[] = [
    {
      platform: 'GitHub',
      url: 'https://github.com/Diego-de-Souza',
      icon: 'fab fa-github',
      label: 'GitHub - Projetos e código',
      color: '#333'
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/diegodesouza-devweb/',
      icon: 'fab fa-linkedin',
      label: 'LinkedIn - Perfil profissional',
      color: '#0077b5'
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/diegodesouza_dev/',
      icon: 'fab fa-instagram',
      label: 'Instagram - Conteúdo sobre desenvolvimento',
      color: '#e4405f'
    },
    {
      platform: 'Facebook',
      url: 'https://www.facebook.com/diegodesouza102',
      icon: 'fab fa-facebook',
      label: 'Facebook - Conecte-se comigo',
      color: '#1877f2'
    }
  ];

  // Footer Sections
  footerSections: FooterSection[] = [
    {
      title: 'Navegação',
      links: [
        { label: 'Início', action: () => this.scrollToTop() },
        { label: 'Sobre', action: () => this.scrollToSection('about') },
        { label: 'Habilidades', action: () => this.scrollToSection('skills') },
        { label: 'Projetos', action: () => this.scrollToSection('modern-portfolio') }
      ]
    },
    {
      title: 'Páginas',
      links: [
        { label: 'Conhecimento', action: () => this.router.navigate(['/conhecimento']) },
        { label: 'Contato', action: () => this.router.navigate(['/contato']) },
        { label: 'Home', action: () => this.router.navigate(['/']) }
      ]
    }
  ];

  // Contact Info
  contactInfo = {
    email: 'diego@example.com',
    location: 'São Paulo, Brasil',
    status: 'Disponível para novos projetos'
  };

  // Quick Actions
  quickActions = [
    {
      label: 'Download CV',
      icon: 'fas fa-download',
      action: () => this.downloadCV()
    },
    {
      label: 'Entre em Contato',
      icon: 'fas fa-envelope',
      action: () => this.router.navigate(['/contato'])
    }
  ];

  onSocialClick(link: SocialLink): void {
    window.open(link.url, '_blank');
  }

  onQuickAction(action: { action: () => void }): void {
    action.action();
  }

  private scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private downloadCV(): void {
    this.downloadService.downloadCV();
  }
}
