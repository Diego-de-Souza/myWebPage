import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { I18nService, AppLanguage } from '../../service/i18n.service';

type LanguageOption = { code: AppLanguage; labelKey: string };

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="language-switcher">
      <button type="button" class="lang-toggle" (click)="toggle()" [attr.aria-label]="'language.label' | translate">
        <i class="fas fa-globe"></i>
        <span class="lang-text">{{ currentLabel() | translate }}</span>
        <i class="fas fa-chevron-down" [class.rotated]="open()"></i>
      </button>

      @if (open()) {
        <div class="lang-dropdown">
          @for (opt of options; track opt.code) {
            <button
              type="button"
              class="lang-option"
              [class.active]="i18n.currentLang() === opt.code"
              (click)="select(opt.code)">
              <span>{{ opt.labelKey | translate }}</span>
              @if (i18n.currentLang() === opt.code) {
                <i class="fas fa-check"></i>
              }
            </button>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .language-switcher { position: relative; width: 100%; }
    .lang-toggle {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 10px 12px;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.08);
      background: rgba(255,255,255,0.04);
      color: var(--text-color, #fff);
      cursor: pointer;
      transition: background 160ms ease, border-color 160ms ease;
    }
    .lang-toggle:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.14); }
    .lang-text { flex: 1; text-align: left; }
    .rotated { transform: rotate(180deg); transition: transform 160ms ease; }

    .lang-dropdown {
      position: absolute;
      left: 0;
      right: 0;
      top: calc(100% + 8px);
      background: rgba(10,10,15,0.92);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255,255,255,0.10);
      border-radius: 12px;
      overflow: hidden;
      z-index: 50;
      box-shadow: 0 18px 45px rgba(0,0,0,0.35);
    }
    .lang-option {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 12px;
      background: transparent;
      border: 0;
      color: inherit;
      cursor: pointer;
    }
    .lang-option:hover { background: rgba(255,255,255,0.06); }
    .lang-option.active { background: rgba(59,130,246,0.14); }
  `]
})
export class LanguageSwitcherComponent {
  readonly i18n = inject(I18nService);
  readonly open = signal(false);

  readonly options: LanguageOption[] = [
    { code: 'pt', labelKey: 'language.pt' },
    { code: 'en', labelKey: 'language.en' },
    { code: 'es', labelKey: 'language.es' },
    { code: 'de', labelKey: 'language.de' }
  ];

  readonly currentLabel = computed(() => {
    const found = this.options.find(o => o.code === this.i18n.currentLang());
    return found?.labelKey ?? 'language.pt';
  });

  toggle(): void {
    this.open.update(v => !v);
  }

  select(code: AppLanguage): void {
    this.i18n.setLanguage(code);
    this.open.set(false);
  }
}

