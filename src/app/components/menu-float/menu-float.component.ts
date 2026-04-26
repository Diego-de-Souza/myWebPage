import { ViewportScroller } from '@angular/common';
import { Component, signal, computed, inject, OnInit, OnDestroy, HostListener } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../service/theme.service';
import { Subject } from 'rxjs';
import { ContactWhatsappComponent } from '../contact-whatsapp/contact-whatsapp.component';
import { TranslateModule } from '@ngx-translate/core';

interface MenuItemConfig {
  id: string;
  labelKey: string;
  icon: string;
  descriptionKey: string;
  sectionId: string;
  color?: string;
}

@Component({
  selector: 'app-menu-float',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, ContactWhatsappComponent, TranslateModule],
  templateUrl: './menu-float.component.html',
  styleUrl: './menu-float.component.scss'
})
export class MenuFloatComponent implements OnInit, OnDestroy {
  private viewportScroller = inject(ViewportScroller);
  themeService = inject(ThemeService);
  private destroy$ = new Subject<void>();

  // Signals
  isVisible = signal(true);
  activeSection = signal('');
  isExpanded = signal(false);
  scrollProgress = signal(0);

  // Computed
  currentTheme = computed(() => this.themeService.currentTheme());
  
  // Math reference for template
  Math = Math;

  // Menu configuration
  menuItems: MenuItemConfig[] = [
    {
      id: 'about',
      labelKey: 'menuFloat.items.about.label',
      icon: 'fas fa-user-circle',
      descriptionKey: 'menuFloat.items.about.description',
      sectionId: 'about',
      color: '#3b82f6'
    },
    {
      id: 'skills',
      labelKey: 'menuFloat.items.skills.label',
      icon: 'fas fa-code',
      descriptionKey: 'menuFloat.items.skills.description',
      sectionId: 'skill',
      color: '#10b981'
    },
    {
      id: 'education',
      labelKey: 'menuFloat.items.education.label',
      icon: 'fas fa-graduation-cap',
      descriptionKey: 'menuFloat.items.education.description',
      sectionId: 'education',
      color: '#8b5cf6'
    },
    {
      id: 'portfolio',
      labelKey: 'menuFloat.items.portfolio.label',
      icon: 'fas fa-laptop-code',
      descriptionKey: 'menuFloat.items.portfolio.description',
      sectionId: 'modern-portfolio',
      color: '#f59e0b'
    },
    {
      id: 'certificates',
      labelKey: 'menuFloat.items.certificates.label',
      icon: 'fas fa-award',
      descriptionKey: 'menuFloat.items.certificates.description',
      sectionId: 'certificate',
      color: '#ef4444'
    }

  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min((scrollTop / scrollHeight) * 100, 100);
    
    this.scrollProgress.set(progress);
    this.updateActiveSection();
  }

  ngOnInit() {
    this.updateActiveSection();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
    this.activeSection.set(sectionId);
    this.isExpanded.set(false);
    
    // Add smooth scroll behavior
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    }
  }

  private updateActiveSection() {
    const sections = this.menuItems.map(item => item.sectionId);
    let currentSection = '';

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight * 0.3 && rect.bottom >= 0;
        
        if (isInViewport) {
          currentSection = sectionId;
        }
      }
    }

    this.activeSection.set(currentSection);
  }

  toggleExpanded() {
    this.isExpanded.set(!this.isExpanded());
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.isExpanded.set(false);
  }

  getMenuItemClass(item: MenuItemConfig): string {
    const isActive = this.activeSection() === item.sectionId;
    return `menu-item ${isActive ? 'active' : ''}`;
  }
}
