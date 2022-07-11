import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageHomeNavbarComponent } from './components/page-home-navbar/page-home-navbar.component';
import { PageHomeCarosselComponent } from './components/page-home-carossel/page-home-carossel.component';
import { PageHomeCardsComponent } from './components/page-home-cards/page-home-cards.component';
import { PageLoginComponent } from './components/page-login/page-login.component';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { PageUsuarioLogadoComponent } from './components/page-usuario-logado/page-usuario-logado.component';
import { PageConsultaCardsComponent } from './components/page-consulta-cards/page-consulta-cards.component';
import { PageAdminNavbarComponent } from './components/page-admin-navbar/page-admin-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeNavbarComponent,
    PageHomeCarosselComponent,
    PageHomeCardsComponent,
    PageLoginComponent,
    PageUsuarioLogadoComponent,
    PageConsultaCardsComponent,
    PageAdminNavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
