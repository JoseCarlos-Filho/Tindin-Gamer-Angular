import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageHomeNavbarComponent } from './components/page-home-navbar/page-home-navbar.component';
import { PageHomeCarosselComponent } from './components/page-home-carossel/page-home-carossel.component';
import { PageHomeCardsComponent } from './components/page-home-cards/page-home-cards.component';
import { PageLoginComponent } from './components/page-login/page-login.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeNavbarComponent,
    PageHomeCarosselComponent,
    PageHomeCardsComponent,
    PageLoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
