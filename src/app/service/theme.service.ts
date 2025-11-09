import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark' | 'neon' | 'forest';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'selected-theme';
  
  // Signal para gerenciar o tema atual
  currentTheme = signal<Theme>('dark');
  
  constructor() {
    // Carregar tema salvo
    const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme;
    if (savedTheme) {
      this.currentTheme.set(savedTheme);
    }
    
    // Effect para aplicar o tema quando mudá-lo
    effect(() => {
      this.applyTheme(this.currentTheme());
    });
  }
  
  private applyTheme(theme: Theme): void {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.THEME_KEY, theme);
  }
  
  setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
  }
  
  toggleTheme(): void {
    const themes: Theme[] = ['light', 'dark', 'neon', 'forest'];
    const currentIndex = themes.indexOf(this.currentTheme());
    const nextIndex = (currentIndex + 1) % themes.length;
    this.setTheme(themes[nextIndex]);
  }
  
  getAvailableThemes(): Theme[] {
    return ['light', 'dark', 'neon', 'forest'];
  }
}