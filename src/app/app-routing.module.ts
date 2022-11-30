import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contato',
    loadChildren: () => import('./contato/contato.module').then( m => m.ContatoPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'detalhes-filmes',
    loadChildren: () => import('./detalhes-filmes/detalhes-filmes.module').then( m => m.DetalhesFilmesPageModule)
  },
  {
    path: 'novapagina',
    loadChildren: () => import('./novapagina/novapagina.module').then( m => m.NovapaginaPageModule)
  },  {
    path: 'cep',
    loadChildren: () => import('./cep/cep.module').then( m => m.CEPPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
