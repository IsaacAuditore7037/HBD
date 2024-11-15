import { Component } from "@angular/core";
import { CarruselComponent } from "./components/carrusel/carrusel.component";
import { LetterComponent } from "./components/letter/letter.component";
import { GiftComponent } from "./components/gift/gift.component";

export class AppRoutingAdmin {
  static rutas = {
    path: 'letter',
    component: LetterComponent,
    children: [

      { path: 'gift', component: GiftComponent },
    ]
  };
}
