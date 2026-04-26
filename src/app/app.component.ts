import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from './service/theme.service';
import { HeaderComponent } from './components/header/header.component';
import { HeaderResponsiveComponent } from './components/header-responsive/header-responsive.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, HeaderResponsiveComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'diego-dev';
  themeService = inject(ThemeService);
  sidebarExpanded = signal(false);
  isLoading = signal(true);
  loadingFadeOut = signal(false);
  progress = signal(0);
  cursorX = signal(0);
  cursorY = signal(0);
  cursorExpanded = signal(false);
  reducedMotion = signal(false);
  private loadTimer?: ReturnType<typeof setTimeout>;
  private cursorFrame?: number;
  private progressFrame?: number;
  private currentX = 0;
  private currentY = 0;
  private targetX = 0;
  private targetY = 0;
  private pointerOverListener?: (event: Event) => void;
  private scrollListener?: () => void;
  private parallaxListener?: (event: PointerEvent) => void;
  
  ngOnInit(): void {
    this.reducedMotion.set(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    this.setupInitialCursorPosition();
    this.startLoadingTransition();
    this.bindCursorInteractions();
    this.bindScrollProgress();
    this.bindParallaxBackground();
  }

  ngOnDestroy(): void {
    if (this.loadTimer) {
      clearTimeout(this.loadTimer);
    }
    if (this.cursorFrame) {
      cancelAnimationFrame(this.cursorFrame);
    }
    if (this.progressFrame) {
      cancelAnimationFrame(this.progressFrame);
    }
    if (this.pointerOverListener) {
      document.removeEventListener('pointerover', this.pointerOverListener);
    }
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
    if (this.parallaxListener) {
      window.removeEventListener('pointermove', this.parallaxListener);
    }
  }

  onPointerMove(event: PointerEvent): void {
    if (this.reducedMotion()) {
      return;
    }
    this.targetX = event.clientX;
    this.targetY = event.clientY;
  }

  private setupInitialCursorPosition(): void {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    this.currentX = centerX;
    this.currentY = centerY;
    this.targetX = centerX;
    this.targetY = centerY;
    this.cursorX.set(centerX);
    this.cursorY.set(centerY);
    if (!this.reducedMotion()) {
      this.animateCursor();
    }
  }

  private animateCursor(): void {
    this.currentX += (this.targetX - this.currentX) * 0.18;
    this.currentY += (this.targetY - this.currentY) * 0.18;
    this.cursorX.set(this.currentX);
    this.cursorY.set(this.currentY);
    this.cursorFrame = requestAnimationFrame(() => this.animateCursor());
  }

  private startLoadingTransition(): void {
    this.loadTimer = setTimeout(() => {
      this.loadingFadeOut.set(true);
      setTimeout(() => this.isLoading.set(false), 450);
    }, 1150);
  }

  private bindCursorInteractions(): void {
    this.pointerOverListener = (event: Event) => {
      const target = event.target as HTMLElement | null;
      this.cursorExpanded.set(!!target?.closest('a, button, [role="button"], .magnetic-btn'));
    };
    document.addEventListener('pointerover', this.pointerOverListener);
  }

  private bindScrollProgress(): void {
    const updateProgress = () => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const next = documentHeight <= 0 ? 0 : (window.scrollY / documentHeight) * 100;
      this.progress.set(Math.min(100, Math.max(0, next)));
      this.progressFrame = undefined;
    };

    this.scrollListener = () => {
      if (this.progressFrame) {
        return;
      }
      this.progressFrame = requestAnimationFrame(updateProgress);
    };
    window.addEventListener('scroll', this.scrollListener, { passive: true });
    updateProgress();
  }

  private bindParallaxBackground(): void {
    if (this.reducedMotion()) {
      return;
    }
    this.parallaxListener = (event: PointerEvent) => {
      const x = ((event.clientX / window.innerWidth) - 0.5) * 14;
      const y = ((event.clientY / window.innerHeight) - 0.5) * 14;
      document.documentElement.style.setProperty('--parallax-x', `${x.toFixed(2)}px`);
      document.documentElement.style.setProperty('--parallax-y', `${y.toFixed(2)}px`);
    };
    window.addEventListener('pointermove', this.parallaxListener, { passive: true });
  }
}
