import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, Theme } from '../../service/theme.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="theme-switcher">
      <div class="theme-toggle" (click)="toggleDropdown()">
        <div class="current-theme">
          <div class="theme-preview" [attr.data-theme]="themeService.currentTheme()"></div>
          <span>{{ getThemeLabel(themeService.currentTheme()) }}</span>
          <i class="fas fa-chevron-down" [class.rotated]="dropdownOpen"></i>
        </div>
      </div>
      
      @if (dropdownOpen) {
        <div class="theme-dropdown" [@slideDown]>
          @for (theme of themeService.getAvailableThemes(); track theme) {
            <div 
              class="theme-option"
              [class.active]="themeService.currentTheme() === theme"
              (click)="selectTheme(theme)">
              <div class="theme-preview" [attr.data-theme]="theme"></div>
              <span>{{ getThemeLabel(theme) }}</span>
              @if (themeService.currentTheme() === theme) {
                <i class="fas fa-check"></i>
              }
            </div>
          }
        </div>
      }
    </div>
  `,
  styleUrls: ['./theme-switcher.component.scss'],
  animations: [
    // Você pode adicionar animações aqui se necessário
  ]
})
export class ThemeSwitcherComponent {
  themeService = inject(ThemeService);
  dropdownOpen = false;
  
  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }
  
  selectTheme(theme: Theme): void {
    this.themeService.setTheme(theme);
    this.dropdownOpen = false;
  }
  
  getThemeLabel(theme: Theme): string {
    const labels: Record<Theme, string> = {
      light: 'Claro',
      dark: 'Escuro',
      neon: 'Neon',
      forest: 'Floresta'
    };
    return labels[theme];
  }
}