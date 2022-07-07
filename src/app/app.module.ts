import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageHomeNavbarComponent } from './components/page-home-navbar/page-home-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeNavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
