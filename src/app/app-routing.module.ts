import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageHomeCarosselComponent} from './components/page-home-carossel/page-home-carossel.component';
import {PageLoginComponent} from './components/page-login/page-login.component';
import {PageUsuarioLogadoComponent} from './components/page-usuario-logado/page-usuario-logado.component';
import {PageHomeNavbarComponent} from './components/page-home-navbar/page-home-navbar.component';
import {PageAdminNavbarComponent} from './components/page-admin-navbar/page-admin-navbar.component';
import {PageConsultaCardsComponent} from './components/page-consulta-cards/page-consulta-cards.component';

const routes: Routes = [
   {
    path: '',
    component: PageHomeNavbarComponent,
    children: [
      {path: '', component: PageHomeCarosselComponent},
      {path: 'login', component: PageLoginComponent},
      {path: 'game/:id', component: PageConsultaCardsComponent}
    ]
  },



   {
    path: 'admin',
    component: PageAdminNavbarComponent,
    children: [
      {path: '', component: PageUsuarioLogadoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
