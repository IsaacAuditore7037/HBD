import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { CommonModule } from '@angular/common';
import { LetterComponent } from './components/letter/letter.component';
import { AppRoutingAdmin } from './app-routing.admin';

const routes: Routes = [

  AppRoutingAdmin.rutas,

  { path: '', component: CarruselComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      useHash: false,
      enableTracing: false,
      scrollPositionRestoration: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
