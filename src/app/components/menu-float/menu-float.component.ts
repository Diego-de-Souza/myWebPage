import { ViewportScroller } from '@angular/common';
import { Component, signal, computed, inject, OnInit, OnDestroy, HostListener } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../service/theme.service';
import { Subject } from 'rxjs';

interface MenuItemConfig {
  id: string;
  label: string;
  icon: string;
  description: string;
  sectionId: string;
  color?: string;
}

@Component({
  selector: 'app-menu-float',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
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
      label: 'Minha Jornada',
      icon: 'fas fa-user-circle',
      description: 'Conhea minha história',
      sectionId: 'about',
      color: '#3b82f6'
    },
    {
      id: 'skills',
      label: 'Habilidades',
      icon: 'fas fa-code',
      description: 'Tecnologias e competências',
      sectionId: 'skill',
      color: '#10b981'
    },
    {
      id: 'education',
      label: 'Formação',
      icon: 'fas fa-graduation-cap',
      description: 'Educação e cursos',
      sectionId: 'education',
      color: '#8b5cf6'
    },
    {
      id: 'portfolio',
      label: 'Projetos',
      icon: 'fas fa-laptop-code',
      description: 'Trabalhos realizados',
      sectionId: 'portfolio',
      color: '#f59e0b'
    },
    {
      id: 'certificates',
      label: 'Certificados',
      icon: 'fas fa-award',
      description: 'Certificações obtidas',
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
  }

  getMenuItemClass(item: MenuItemConfig): string {
    const isActive = this.activeSection() === item.sectionId;
    return `menu-item ${isActive ? 'active' : ''}`;
  }
}
