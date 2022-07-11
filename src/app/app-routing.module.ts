import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageHomeCarosselComponent} from './components/page-home-carossel/page-home-carossel.component';
import {PageLoginComponent} from './components/page-login/page-login.component';

const routes: Routes = [
   { path: '', component: PageHomeCarosselComponent },
   { path: 'login', component: PageLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
