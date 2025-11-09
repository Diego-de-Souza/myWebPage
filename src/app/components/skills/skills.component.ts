import { Component, OnInit, signal, computed, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionObserverDirective } from '../../directive/intersection-observer.directive';
import { skills } from '../../data/skills_dados';

interface SkillItem {
  id: number;
  icon: string;
  description: string;
  level: number;
  color: string;
  details?: string;
}

interface SkillCategory {
  tipo: string;
  titulo: string;
  icon: string;
  itens: SkillItem[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, IntersectionObserverDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  // Signals para gerenciamento reativo
  screenWidth = signal(window.innerWidth);
  isVisible = signal(false);
  selectedCategory = signal<string>('all');
  
  // Dados das skills
  skillCategories = signal<SkillCategory[]>([]);
  
  // Computed properties
  isMobile = computed(() => this.screenWidth() <= 768);
  
  languageSkills = computed(() => 
    this.skillCategories().find(cat => cat.tipo === 'languages')?.itens || []
  );
  
  frameworkSkills = computed(() => 
    this.skillCategories().find(cat => cat.tipo === 'frameworks')?.itens || []
  );

  specializationSkills = computed(() => 
    this.skillCategories().find(cat => cat.tipo === 'specializations')?.itens || []
  );
  
  allSkills = computed(() => [
    ...this.languageSkills(),
    ...this.frameworkSkills(),
    ...this.specializationSkills()
  ]);
  
  filteredSkills = computed(() => {
    const category = this.selectedCategory();
    if (category === 'all') return this.allSkills();
    if (category === 'languages') return this.languageSkills();
    if (category === 'frameworks') return this.frameworkSkills();
    if (category === 'specializations') return this.specializationSkills();
    return this.allSkills();
  });

  ngOnInit(): void {
    this.skillCategories.set(skills);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.screenWidth.set(window.innerWidth);
  }

  onIntersection(isIntersecting: boolean): void {
    this.isVisible.set(isIntersecting);
  }

  selectCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  getSkillLevelPercentage(level: number): number {
    return Math.min(Math.max(level, 0), 100);
  }

  getSkillLevelText(level: number): string {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Avançado';
    if (level >= 50) return 'Intermediário';
    if (level >= 25) return 'Básico';
    return 'Iniciante';
  }
}
