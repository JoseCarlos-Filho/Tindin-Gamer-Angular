import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageHomeCarosselComponent} from './components/page-home-carossel/page-home-carossel.component';
import {PageLoginComponent} from './components/page-login/page-login.component';
import {PageUsuarioLogadoComponent} from './components/page-usuario-logado/page-usuario-logado.component'

const routes: Routes = [
   {
    path: '',
    component: PageHomeCarosselComponent,
    children: [
      {path: 'login', component: PageLoginComponent}
    ]
  },
   { path: 'logado', component: PageUsuarioLogadoComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
