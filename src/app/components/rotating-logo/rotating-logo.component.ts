import { Component, signal, computed, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../service/theme.service';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-rotating-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rotating-logo.component.html',
  styleUrls: ['./rotating-logo.component.scss', './rotating-logo-responsive.component.scss']
})
export class RotatingLogoComponent implements OnInit, OnDestroy {
  private themeService = inject(ThemeService);
  private destroy$ = new Subject<void>();

  // Signals
  rotationAngle = signal(0);
  isAnimating = signal(true);
  pulseScale = signal(1);

  // Computed
  currentTheme = computed(() => this.themeService.currentTheme());
  logoStyle = computed(() => ({
    transform: `rotate(${this.rotationAngle()}deg) scale(${this.pulseScale()})`,
    filter: `hue-rotate(${this.rotationAngle()}deg)`
  }));

  ngOnInit() {
    // Continuous rotation animation
    interval(50)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if (this.isAnimating()) {
          this.rotationAngle.update(angle => (angle + 1) % 360);
        }
      });

    // Pulse animation
    interval(3000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.pulseScale.set(1.2);
        setTimeout(() => this.pulseScale.set(1), 300);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleAnimation() {
    this.isAnimating.set(!this.isAnimating());
  }

  resetRotation() {
    this.rotationAngle.set(0);
  }
}
