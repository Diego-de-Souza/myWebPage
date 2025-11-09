import { Component, computed, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionObserverDirective } from '../../directive/intersection-observer.directive';
import { ThemeService } from '../../service/theme.service';

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
  imports: [CommonModule, IntersectionObserverDirective],
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
      title: 'Engenharia da Computação',
      institution: 'FESA - Faculdade Engenheiro Salvador Arena',
      period: 'Agosto 2022 - Atual',
      description: 'Curso voltado para projetar, desenvolver e implementar equipamentos e dispositivos computacionais, automatizar máquinas com sistemas baseados em IA, criar sistemas de processamento de dados e automatizar equipamentos no setor da robótica.',
      type: 'degree',
      status: 'current',
      level: 'higher',
      skills: ['Inteligência Artificial', 'Robótica', 'Sistemas Embarcados', 'Processamento de Dados']
    },
    {
      id: 'tec-mecatronica',
      title: 'Tecnólogo em Mecatrônica Industrial',
      institution: 'FESA - Faculdade Engenheiro Salvador Arena',
      period: 'Agosto 2014 - Junho 2017',
      description: 'Foco em gestão de desenvolvimento, implementação e manutenção de sistemas mecatrônicos de produção industrial, com laboratórios de robótica, automação, IoT, microcontroladores e usinagem CNC.',
      type: 'degree',
      status: 'completed',
      level: 'higher',
      skills: ['Automação Industrial', 'Robótica', 'IoT', 'CNC', 'Microcontroladores']
    },
    {
      id: 'tec-eletromecanica',
      title: 'Técnico em Eletromecânica Industrial',  
      institution: 'SENAI - Manuel Garcia Filho',
      period: 'Janeiro 2012 - Dezembro 2013',
      description: 'Habilitação para montagem e manutenção de sistemas, máquinas e equipamentos elétricos/mecânicos, planejamento de manutenção e análise de desenhos técnicos.',
      type: 'degree',
      status: 'completed',
      level: 'technical',
      skills: ['Manutenção Industrial', 'Sistemas Elétricos', 'Desenho Técnico', 'Mecânica']
    },
    {
      id: 'ensino-medio',
      title: 'Ensino Médio Regular',
      institution: 'E.E.P.G. Prof. Francisco Cristiano de Freitas',
      period: 'Concluído - Dezembro 2011',
      description: 'Formação básica do ensino médio com currículo da rede estadual, contribuindo para a melhoria da qualidade das aprendizagens.',
      type: 'degree',
      status: 'completed',
      level: 'high-school'
    },
    {
      id: 'android-dev',
      title: 'Desenvolvimento de APPS para Android',
      institution: 'SENAI SP - Anchieta',
      period: 'Abril 2022 - Junho 2022',
      description: '68h de aprendizado em desenvolvimento Android com Android Studio, Kotlin e XML.',
      type: 'specialization',
      status: 'completed',
      level: 'specialization',
      duration: '68h',
      skills: ['Android Studio', 'Kotlin', 'XML', 'Mobile Development']
    },
    {
      id: 'office',
      title: 'Informática - Pacote Office',
      institution: 'Compuway - Ensino Interativo',
      period: 'Abril 2022 - Novembro 2022',
      description: '92h de aprendizado em informática básica, Windows, Word, Excel, PowerPoint e Internet.',
      type: 'specialization',
      status: 'completed',
      level: 'specialization',
      duration: '92h',
      skills: ['Microsoft Office', 'Windows', 'Internet']
    },
    {
      id: 'comandos-eletricos',
      title: 'Montador e Reparador de Comandos Elétricos',
      institution: 'SENAI - Manuel Garcia Filho',
      period: 'Junho 2006 - Dezembro 2009',
      description: '180h no desenvolvimento de criação e manutenção de comandos elétricos industriais.',
      type: 'specialization',
      status: 'completed',
      level: 'specialization',
      duration: '180h',
      skills: ['Comandos Elétricos', 'Automação', 'Manutenção Industrial']
    },
    {
      id: 'eletricista',
      title: 'Eletricista Geral',
      institution: 'SENAI - Manuel Garcia Filho',
      period: 'Janeiro 2009 - Abril 2009',
      description: '120h em instalação e manutenção de redes elétricas industriais e residenciais.',
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
    { id: 'all', label: 'Todos', count: () => this.educationData.length },
    { id: 'degrees', label: 'Formação', count: () => this.degrees().length },
    { id: 'specializations', label: 'Especializações', count: () => this.specializations().length }
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
