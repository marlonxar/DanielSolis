import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-retro',
  templateUrl: './retro.component.html',
  styleUrls: ['./retro.component.css'],
})
export class RetroComponent implements AfterViewInit {
  // Capturamos el elemento #filmVideo del HTML
  @ViewChild('filmVideo') filmVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    this.encenderVideo();
  }

  encenderVideo() {
    if (this.filmVideo && this.filmVideo.nativeElement) {
      const video = this.filmVideo.nativeElement;

      // Aseguramos por código que esté muteado (requisito obligatorio del navegador para auto-play)
      video.muted = true;

      // Forzamos la reproducción activa
      video.play().catch((error) => {
        console.warn(
          'El navegador bloqueó momentáneamente el autoplay al cambiar de ruta:',
          error,
        );

        // Intento secundario de respaldo en caso de latencia de carga
        setTimeout(() => {
          video.play();
        }, 100);
      });
    }
  }
}
