import { Component } from '@angular/core';
import { artigos } from '../../../data/artigos';

interface Artigo {
  titulo: string;
  resumo: string;
  data: string;
  conteudo?: string;
}

@Component({
  selector: 'app-artigos',
  standalone: true,
  templateUrl: './artigos.component.html',
  styleUrls: ['./artigos.component.scss']
})
export class ArtigosComponent {
  artigos: Artigo[] = artigos

  selectedArtigo: Artigo | null = null;
}
