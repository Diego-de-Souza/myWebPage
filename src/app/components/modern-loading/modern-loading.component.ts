import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export type LoadingType = 'spinner' | 'dots' | 'pulse' | 'bars' | 'ripple';

@Component({
  selector: 'app-modern-loading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loading-container" [class.fullscreen]="fullscreen">
      @switch (type) {
        @case ('spinner') {
          <div class="spinner-loading">
            <div class="spinner"></div>
            @if (message) {
              <p class="loading-message">{{ message }}</p>
            }
          </div>
        }
        @case ('dots') {
          <div class="dots-loading">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            @if (message) {
              <p class="loading-message">{{ message }}</p>
            }
          </div>
        }
        @case ('pulse') {
          <div class="pulse-loading">
            <div class="pulse-circle"></div>
            @if (message) {
              <p class="loading-message">{{ message }}</p>
            }
          </div>
        }
        @case ('bars') {
          <div class="bars-loading">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            @if (message) {
              <p class="loading-message">{{ message }}</p>
            }
          </div>
        }
        @case ('ripple') {
          <div class="ripple-loading">
            <div class="ripple"></div>
            <div class="ripple"></div>
            @if (message) {
              <p class="loading-message">{{ message }}</p>
            }
          </div>
        }
      }
    </div>
  `,
  styleUrls: ['./modern-loading.component.scss']
})
export class ModernLoadingComponent {
  @Input() type: LoadingType = 'spinner';
  @Input() message?: string;
  @Input() fullscreen = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
}