import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  @ViewChild('bgMusic') bgMusic!: ElementRef<HTMLAudioElement>;

  hearts: any[] = [];
  images: any[] = [];
  musicStarted = false;

  constructor(public _Router: Router) {}

  ngOnInit(): void {
    // Inicializar collage
    for (let i = 1; i < 31; i++) {
      this.images.push("../../../assets/Collage/" + i + ".jpg");
    }

    // Intentar reproducir música
    // setTimeout(() => {
    //   const audio = this.bgMusic?.nativeElement;
    //   if (audio) {
    //     audio.volume = 0.5;
    //     audio.play().catch(() => {
    //       console.log("El navegador bloqueó la reproducción automática de audio");
    //     });
    //   }
    // }, 500); // Pequeño delay para garantizar carga de DOM


    this.generateHearts(); // iniciar generación de corazones
  }

   generateHearts() {
    setInterval(() => {
      const heart = {
        id: Math.random(),
        left: Math.random() * 100,        // posición horizontal %
        size: 20 + Math.random() * 40,    // tamaño 20-60px
        duration: 4 + Math.random() * 4,  // duración 4-8s
        color: `hsla(${330 + Math.random() * 30}, 100%, 75%, ${0.5 + Math.random()*0.5})`, // tonos rosados
        rotate: Math.random() * 360        // rotación inicial
      };
      this.hearts.push(heart);

      // Limitar la cantidad de corazones en el DOM
      if (this.hearts.length > 150) {
        this.hearts.shift();
      }
    }, 200); // cada 200ms aparece un corazón
  }

playMusic() {
  const audio = this.bgMusic?.nativeElement;
  if (audio) {
    audio.volume = 0.5;
    audio.play().then(() => {
      this.musicStarted = true; // ocultar overlay
    }).catch(() => {
      console.log("El navegador bloqueó la reproducción automática de audio");
    });
  }
}

previewImage: string | null = null;

showPreview(image: string) {
  this.previewImage = image;
}

hidePreview() {
  this.previewImage = null;
}

  letter() {
    this._Router.navigate(['/letter']);
  }
}
