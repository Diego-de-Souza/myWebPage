import { Component, OnInit } from '@angular/core';
import {portfolio} from '../../data/portfolio_dados';
import { GitModel } from '../../model/git-model';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, MatCardModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit{
  dadosPortfolio: GitModel[]=[];

  constructor(){}

  ngOnInit(){
    this.dadosPortfolio = portfolio
      .filter((dados: any)=>dados.tipo === 'web')
      .map((dado: any) => dado.itens)
      .flat();
      
  }

  openPortfolio(tipo:string): void{
    if(tipo === "front"){
      this.dadosPortfolio = portfolio
      .filter((dados: any)=>dados.tipo === 'web')
      .map((dado: any) => dado.itens)
      .flat();
    }
    if(tipo === "back"){
      this.dadosPortfolio = portfolio
      .filter((dados: any)=> dados.tipo === 'banco_de_dados')
      .map((dado: any) => dado.itens)
      .flat();
    }
  }
}
