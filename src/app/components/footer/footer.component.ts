import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ThemeService } from '../../service/theme.service';
import { DownloadService } from '../../service/download.service';
import { ContactWhatsappComponent } from '../contact-whatsapp/contact-whatsapp.component';
import { TranslateModule } from '@ngx-translate/core';

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
  color: string;
}

interface FooterSection {
  titleKey: string;
  links: { labelKey: string; action: () => void }[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ContactWhatsappComponent, TranslateModule],
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
      label: 'footer.social.githubAria',
      color: '#333'
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/diegodesouza-devweb/',
      icon: 'fab fa-linkedin',
      label: 'footer.social.linkedinAria',
      color: '#0077b5'
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/diegodesouza_dev/',
      icon: 'fab fa-instagram',
      label: 'footer.social.instagramAria',
      color: '#e4405f'
    },
    {
      platform: 'Facebook',
      url: 'https://www.facebook.com/diegodesouza102',
      icon: 'fab fa-facebook',
      label: 'footer.social.facebookAria',
      color: '#1877f2'
    }
  ];

  // Footer Sections
  footerSections: FooterSection[] = [
    {
      titleKey: 'footer.sections.navigation',
      links: [
        { labelKey: 'footer.links.start', action: () => this.scrollToTop() },
        { labelKey: 'footer.links.about', action: () => this.scrollToSection('about') },
        { labelKey: 'footer.links.skills', action: () => this.scrollToSection('skills') },
        { labelKey: 'footer.links.projects', action: () => this.scrollToSection('modern-portfolio') }
      ]
    },
    {
      titleKey: 'footer.sections.pages',
      links: [
        { labelKey: 'nav.home', action: () => this.router.navigate(['/']) },
        { labelKey: 'nav.knowledge', action: () => this.router.navigate(['/conhecimento']) },
        { labelKey: 'nav.services', action: () => this.router.navigate(['/servicos']) },
        { labelKey: 'nav.contact', action: () => this.router.navigate(['/contato']) }
        
      ]
    }
  ];

  // Contact Info
  contactInfo = {
    email: 'diegodesouza.souza@gmail.com',
    locationKey: 'footer.contact.location',
    statusKey: 'footer.contact.status'
  };

  // Quick Actions
  quickActions = [
    {
      labelKey: 'footer.quick.downloadCv',
      icon: 'fas fa-download',
      action: () => this.downloadCV()
    },
    {
      labelKey: 'footer.quick.contact',
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
