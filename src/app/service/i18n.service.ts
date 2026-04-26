import { Injectable, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

export type AppLanguage = 'pt' | 'en' | 'es' | 'de';

const STORAGE_KEY = 'app.language';
const SUPPORTED: readonly AppLanguage[] = ['pt', 'en', 'es', 'de'] as const;

@Injectable({ providedIn: 'root' })
export class I18nService {
  private translate = inject(TranslateService);
  private document = inject(DOCUMENT);

  readonly currentLang = signal<AppLanguage>('pt');

  init(): void {
    const preferred = this.readStoredLang() ?? this.detectBrowserLang() ?? 'pt';
    this.translate.addLangs([...SUPPORTED]);
    this.translate.setDefaultLang('pt');
    this.setLanguage(preferred, false);
  }

  setLanguage(lang: AppLanguage, persist = true): void {
    if (!SUPPORTED.includes(lang)) {
      lang = 'pt';
    }

    this.currentLang.set(lang);
    this.translate.use(lang);
    this.document.documentElement.lang = this.toHtmlLang(lang);

    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        // ignore
      }
    }
  }

  private readStoredLang(): AppLanguage | null {
    try {
      const v = localStorage.getItem(STORAGE_KEY) as AppLanguage | null;
      return v && SUPPORTED.includes(v) ? v : null;
    } catch {
      return null;
    }
  }

  private detectBrowserLang(): AppLanguage | null {
    const raw = (navigator.language || '').toLowerCase();
    const base = raw.split('-')[0] as AppLanguage;
    return SUPPORTED.includes(base) ? base : null;
  }

  private toHtmlLang(lang: AppLanguage): string {
    switch (lang) {
      case 'pt':
        return 'pt-BR';
      case 'en':
        return 'en';
      case 'es':
        return 'es';
      case 'de':
        return 'de';
    }
  }
}
