import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { LetterComponent } from './components/letter/letter.component';
import { GiftComponent } from './components/gift/gift.component';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    LetterComponent,
    GiftComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
