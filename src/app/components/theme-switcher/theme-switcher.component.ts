import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, Theme } from '../../service/theme.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="theme-switcher">
      <div class="theme-toggle" (click)="toggleDropdown()">
        <div class="current-theme">
          <div class="theme-preview" [attr.data-theme]="themeService.currentTheme()"></div>
          <span>{{ getThemeLabelKey(themeService.currentTheme()) | translate }}</span>
          <i class="fas fa-chevron-down" [class.rotated]="dropdownOpen"></i>
        </div>
      </div>

      @if (dropdownOpen) {
        <div class="theme-dropdown">
          @for (theme of themeService.getAvailableThemes(); track theme) {
            <div
              class="theme-option"
              [class.active]="themeService.currentTheme() === theme"
              (click)="selectTheme(theme)">
              <div class="theme-preview" [attr.data-theme]="theme"></div>
              <span>{{ getThemeLabelKey(theme) | translate }}</span>
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
  animations: []
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

  getThemeLabelKey(theme: Theme): string {
    const labels: Record<Theme, string> = {
      light: 'theme.light',
      dark: 'theme.dark',
      neon: 'theme.neon',
      forest: 'theme.forest'
    };
    return labels[theme] ?? 'theme.light';
  }
}
