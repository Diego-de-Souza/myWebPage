import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ConhecimentoComponent } from './pages/conhecimento/conhecimento.component';
import { ArtigosComponent } from './pages/conhecimento/artigos/artigos.component';
import { ServicesComponent } from './components/services/services.component';
import { CuriosidadeComponent } from './pages/conhecimento/curiosidades/curiosidade.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Diego-Dev',
        component: HomeComponent,
    },
    {
        path: 'contato',
        title: 'Contato',
        component: ContatoComponent,
    },
    {
        path: 'conhecimento',
        title: 'Conhecimento',
        component: ConhecimentoComponent,
    },
    {
        path: 'conhecimento/artigos',
        title: 'Artigos',
        component: ArtigosComponent,
    },
    {
        path: 'conhecimento/curiosidades',
        title: 'Curiosidades',
        component: CuriosidadeComponent,
    },
    {
        path: 'servicos',
        component: ServicesComponent,
        title: 'Serviços',
    },
    {
        path: '**',
        redirectTo: '' 
    }
];
