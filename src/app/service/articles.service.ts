import { Injectable } from '@angular/core';
import { AppLanguage } from './i18n.service';
import type { Artigo } from '../data/artigos.pt';
import { artigosPt } from '../data/artigos.pt';
import { artigosEn } from '../data/artigos.en';
import { artigosEs } from '../data/artigos.es';
import { artigosDe } from '../data/artigos.de';

@Injectable({ providedIn: 'root' })
export class ArticlesService {
  getArticles(lang: AppLanguage): Artigo[] {
    switch (lang) {
      case 'en':
        return artigosEn;
      case 'es':
        return artigosEs;
      case 'de':
        return artigosDe;
      case 'pt':
      default:
        return artigosPt;
    }
  }
}

