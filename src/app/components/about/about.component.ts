import { Component, HostListener, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionObserverDirective } from '../../directive/intersection-observer.directive';
import { about } from '../../data/about-dados';

interface AboutItem {
  id: number;
  title: string;
  text: string;
  urlImage: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, IntersectionObserverDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  // Signals para gerenciamento reativo
  screenWidth = signal(window.innerWidth);
  visibleItems = signal<Set<number>>(new Set());
  
  // Dados do about
  aboutItems = signal<AboutItem[]>([]);
  
  // Computed para dados específicos
  aboutData1 = computed(() => this.aboutItems().find(item => item.id === 1));
  aboutData2 = computed(() => this.aboutItems().find(item => item.id === 2));
  aboutData3 = computed(() => this.aboutItems().find(item => item.id === 3));
  
  // Computed para responsividade
  isMobile = computed(() => this.screenWidth() <= 768);
  isTablet = computed(() => this.screenWidth() > 768 && this.screenWidth() <= 1024);
  isDesktop = computed(() => this.screenWidth() > 1024);

  ngOnInit(): void {
    // Carregar os dados do about
    this.aboutItems.set(about);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.screenWidth.set(window.innerWidth);
  }

  onItemIntersecting(itemId: number, isIntersecting: boolean): void {
    const currentVisible = this.visibleItems();
    if (isIntersecting) {
      currentVisible.add(itemId);
    } else {
      currentVisible.delete(itemId);
    }
    this.visibleItems.set(new Set(currentVisible));
  }

  isItemVisible(itemId: number): boolean {
    return this.visibleItems().has(itemId);
  }

  getItemClasses(itemId: number): string {
    const baseClasses = 'about-item';
    const visibleClass = this.isItemVisible(itemId) ? 'visible' : '';
    const deviceClass = this.isMobile() ? 'mobile' : this.isTablet() ? 'tablet' : 'desktop';
    
    return `${baseClasses} ${visibleClass} ${deviceClass}`.trim();
  }

  formatItemNumber(id: number): string {
    return String(id).padStart(2, '0');
  }

  expandCard(itemId: number): void {
    // Implementar lógica para expandir card se necessário
    console.log('Expandindo card:', itemId);
  }
}
