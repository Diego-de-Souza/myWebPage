import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { I18nService } from '../../../service/i18n.service';
import { ArticlesService } from '../../../service/articles.service';

interface Artigo {
  titulo: string;
  resumo: string;
  data: string;
  conteudo?: string;
}

@Component({
  selector: 'app-artigos',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './artigos.component.html',
  styleUrls: ['./artigos.component.scss']
})
export class ArtigosComponent {
  private i18n = inject(I18nService);
  private articlesService = inject(ArticlesService);

  artigos = computed(() => this.articlesService.getArticles(this.i18n.currentLang()));
  selectedArtigo = signal<Artigo | null>(null);
}
