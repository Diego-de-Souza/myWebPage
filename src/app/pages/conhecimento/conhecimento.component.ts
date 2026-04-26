import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-conhecimento',
  standalone: true,
  imports: [MatButtonModule, TranslateModule],
  templateUrl: './conhecimento.component.html',
  styleUrl: './conhecimento.component.scss'
})
export class ConhecimentoComponent {

  constructor(private router: Router){}

  voltar(){
    this.router.navigate([''])
  }

  navigateTo(destino: string) {
    this.router.navigate([`/conhecimento/${destino}`]);
  }
}
