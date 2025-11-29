import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { WeatherComponent } from '../weather/weather.component';
import { ThemeService } from '../../service/theme.service';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';

interface NavigationItem {
  path: string;
  label: string;
  icon: string;
  faIcon: string;
}

interface SocialLink {
  url: string;
  label: string;
  icon: string;
  faIcon: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [CommonModule, RouterModule, WeatherComponent, ThemeSwitcherComponent]
})
export class HeaderComponent {
  private router = inject(Router);
  private themeService = inject(ThemeService);

  // Signals para gerenciamento reativo de estado
  isMenuExpanded = signal(false);
  currentTime = signal(new Date());
  activeRoute = signal('');

  // Dados de navegação usando tipos modernos
  navigationItems: NavigationItem[] = [
    { path: '/', label: 'Home', icon: 'home-icon.png', faIcon: 'fas fa-home' },
    { path: '/conhecimento', label: 'Conhecimento', icon: 'questions-icon.png', faIcon: 'fas fa-brain' },
    { path: '/servicos', label: 'Serviços', icon: 'services-icon.png', faIcon: 'fas fa-briefcase' },
    { path: '/contato', label: 'Contato', icon: 'contact-us.png', faIcon: 'fas fa-envelope' }
  ];

  socialLinks: SocialLink[] = [
    { url: 'https://github.com/Diego-de-Souza', label: 'GitHub', icon: 'github.png', faIcon: 'fab fa-github' },
    { url: 'https://www.linkedin.com/in/diegodesouza-devweb/', label: 'LinkedIn', icon: 'linkedin.png', faIcon: 'fab fa-linkedin' },
    { url: 'https://www.instagram.com/diegodesouza_dev/', label: 'Instagram', icon: 'instagram.png', faIcon: 'fab fa-instagram' },
    { url: 'https://www.facebook.com/diegodesouza102', label: 'Facebook', icon: 'facebook.png', faIcon: 'fab fa-facebook' }
  ];

  ngOnInit(): void {
    // Atualizar tempo a cada minuto
    setInterval(() => {
      this.currentTime.set(new Date());
    }, 60000);

    // Detectar rota ativa
    this.router.events.subscribe(() => {
      this.activeRoute.set(this.router.url);
    });
  }

  toggleMenu(): void {
    this.isMenuExpanded.update(expanded => !expanded);
  }

  expandMenu(): void {
    this.isMenuExpanded.set(true);
  }

  collapseMenu(): void {
    this.isMenuExpanded.set(false);
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
    this.collapseMenu();
  }

  isRouteActive(path: string): boolean {
    return this.activeRoute() === path || (path === '/' && this.activeRoute() === '');
  }

  openExternalLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
