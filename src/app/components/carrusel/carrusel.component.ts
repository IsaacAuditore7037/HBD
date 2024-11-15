import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent implements OnInit{

  constructor(
    public _Router: Router,
  ) {}

  images: any [] = [];


  ngOnInit(): void {

    let numeros: number [] = [];

    for(let i = 0; i < 20; i++){
      let numero: number = 0;
      numero = Math.floor(Math.random() * (11 - 0) + 0);
      numeros.push(numero);
    }
    console.log("numeros", numeros);

    numeros.forEach((numero) => {
      if(numero == 0){
        this.images.push("https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg");
      } else {
        this.images.push("https://flowbite.s3.amazonaws.com/docs/gallery/square/image-" + numero +".jpg");
      }
    });

    console.log("images", this.images);

  }

  letter(){
    let path = `/letter`;
    this._Router.navigate([path]);
  }

}
