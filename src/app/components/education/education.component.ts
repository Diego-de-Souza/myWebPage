import { Component, computed, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionObserverDirective } from '../../directive/intersection-observer.directive';
import { ThemeService } from '../../service/theme.service';
import { TranslateModule } from '@ngx-translate/core';

interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  type: 'degree' | 'specialization';
  status: 'completed' | 'current';
  level: 'high-school' | 'technical' | 'higher' | 'specialization';
  skills?: string[];
  duration?: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, IntersectionObserverDirective, TranslateModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  private themeService = inject(ThemeService);

  // Signals
  selectedCategory = signal<'all' | 'degrees' | 'specializations'>('all');
  visibleEducationIds = signal(new Set<string>());
  currentYear = signal(new Date().getFullYear());
  
  // Computed
  currentTheme = computed(() => this.themeService.currentTheme());
  
  // Education Data
  educationData: EducationItem[] = [
    {
      id: 'eng-comp',
      title: 'education.items.engComp.title',
      institution: 'education.items.engComp.institution',
      period: 'education.items.engComp.period',
      description: 'education.items.engComp.description',
      type: 'degree',
      status: 'current',
      level: 'higher',
      skills: ['Inteligência Artificial', 'Robótica', 'Sistemas Embarcados', 'Processamento de Dados']
    },
    {
      id: 'tec-mecatronica',
      title: 'education.items.mechatronics.title',
      institution: 'education.items.mechatronics.institution',
      period: 'education.items.mechatronics.period',
      description: 'education.items.mechatronics.description',
      type: 'degree',
      status: 'completed',
      level: 'higher',
      skills: ['Automação Industrial', 'Robótica', 'IoT', 'CNC', 'Microcontroladores']
    },
    {
      id: 'tec-eletromecanica',
      title: 'education.items.electromechanics.title',
      institution: 'education.items.electromechanics.institution',
      period: 'education.items.electromechanics.period',
      description: 'education.items.electromechanics.description',
      type: 'degree',
      status: 'completed',
      level: 'technical',
      skills: ['Manutenção Industrial', 'Sistemas Elétricos', 'Desenho Técnico', 'Mecânica']
    },
    {
      id: 'ensino-medio',
      title: 'education.items.highSchool.title',
      institution: 'education.items.highSchool.institution',
      period: 'education.items.highSchool.period',
      description: 'education.items.highSchool.description',
      type: 'degree',
      status: 'completed',
      level: 'high-school'
    },
    {
      id: 'android-dev',
      title: 'education.items.android.title',
      institution: 'education.items.android.institution',
      period: 'education.items.android.period',
      description: 'education.items.android.description',
      type: 'specialization',
      status: 'completed',
      level: 'specialization',
      duration: '68h',
      skills: ['Android Studio', 'Kotlin', 'XML', 'Mobile Development']
    },
    {
      id: 'office',
      title: 'education.items.office.title',
      institution: 'education.items.office.institution',
      period: 'education.items.office.period',
      description: 'education.items.office.description',
      type: 'specialization',
      status: 'completed',
      level: 'specialization',
      duration: '92h',
      skills: ['Microsoft Office', 'Windows', 'Internet']
    },
    {
      id: 'comandos-eletricos',
      title: 'education.items.electricalCommands.title',
      institution: 'education.items.electricalCommands.institution',
      period: 'education.items.electricalCommands.period',
      description: 'education.items.electricalCommands.description',
      type: 'specialization',
      status: 'completed',
      level: 'specialization',
      duration: '180h',
      skills: ['Comandos Elétricos', 'Automação', 'Manutenção Industrial']
    },
    {
      id: 'eletricista',
      title: 'education.items.electrician.title',
      institution: 'education.items.electrician.institution',
      period: 'education.items.electrician.period',
      description: 'education.items.electrician.description',
      type: 'specialization',
      status: 'completed',
      level: 'specialization',
      duration: '120h',
      skills: ['Instalações Elétricas', 'Manutenção Elétrica', 'Redes Elétricas']
    }
  ];

  // Computed properties
  filteredEducation = computed(() => {
    const category = this.selectedCategory();
    if (category === 'all') return this.educationData;
    if (category === 'degrees') return this.educationData.filter(item => item.type === 'degree');
    if (category === 'specializations') return this.educationData.filter(item => item.type === 'specialization');
    return this.educationData;
  });

  degrees = computed(() => this.educationData.filter(item => item.type === 'degree'));
  specializations = computed(() => this.educationData.filter(item => item.type === 'specialization'));

  // Categories for filtering
  categories: { id: 'all' | 'degrees' | 'specializations', label: string, count: () => number }[] = [
    { id: 'all', label: 'education.filters.all', count: () => this.educationData.length },
    { id: 'degrees', label: 'education.filters.degrees', count: () => this.degrees().length },
    { id: 'specializations', label: 'education.filters.specializations', count: () => this.specializations().length }
  ];

  ngOnInit(): void {
    // Initialize with staggered animations
    setTimeout(() => {
      this.educationData.slice(0, 2).forEach(item => {
        this.visibleEducationIds.update(ids => new Set(ids.add(item.id)));
      });
    }, 500);
  }

  onCategoryChange(category: 'all' | 'degrees' | 'specializations'): void {
    this.selectedCategory.set(category);
  }

  onEducationVisible(isIntersecting: boolean, itemId: string): void {
    if (isIntersecting) {
      this.visibleEducationIds.update(ids => new Set(ids.add(itemId)));
    }
  }

  isEducationVisible(itemId: string): boolean {
    return this.visibleEducationIds().has(itemId);
  }

  getStatusIcon(status: string): string {
    return status === 'current' ? 'fas fa-play' : 'fas fa-check';
  }

  getStatusColor(status: string): string {
    return status === 'current' ? 'var(--accent-color)' : 'var(--success-color, #4ade80)';
  }

  getLevelIcon(level: string): string {
    switch (level) {
      case 'higher': return 'fas fa-graduation-cap';
      case 'technical': return 'fas fa-tools';
      case 'specialization': return 'fas fa-certificate';
      case 'high-school': return 'fas fa-school';
      default: return 'fas fa-book';
    }
  }
}
