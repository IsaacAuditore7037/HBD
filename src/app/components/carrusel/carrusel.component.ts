import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

    // for(let i = 1; i < 21; i++){
    //   let numero: number = 0;
    //   numero = Math.floor(Math.random() * (20 - 1) + 0);
    //   numeros.push(numero);
    // }

    for(let i = 1; i < 21; i++){
      // let numero: number = 0;
      // numero = Math.floor(Math.random() * (20 - 1) + 0);
      // numeros.push(numero);
      numeros.push(i);
    }

    console.log("numeros", numeros);

    numeros.forEach((numero) => {
      // if(numero == 0){
      //   this.images.push("https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg");
      // } else {
      //   this.images.push("https://flowbite.s3.amazonaws.com/docs/gallery/square/image-" + numero +".jpg");
      // }
      this.images.push("../../../assets/Collage/" + numero +".jpg")
    });

    console.log("images", this.images);

  }

  letter(){
    let path = `/letter`;
    this._Router.navigate([path]);
  }

}
