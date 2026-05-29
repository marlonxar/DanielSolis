import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-retro',
  templateUrl: './retro.component.html',
  styleUrls: ['./retro.component.css'],
})
export class RetroComponent implements AfterViewInit {
  // 1. Tu referencia actual para el video de fondo (Film Grain)
  @ViewChild('filmVideo') filmVideo!: ElementRef<HTMLVideoElement>;

  // 2. Nueva referencia para el video vertical del mockup (Instagram/Home)
  @ViewChild('instagramVideo') instagramVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    this.encenderVideos();
  }

  encenderVideos() {
    // Inicializamos las referencias nativas de ambos elementos
    const bgVideo = this.filmVideo?.nativeElement;
    const mockVideo = this.instagramVideo?.nativeElement;

    // Ejecutamos la lógica de inicio para el video de fondo (Tu lógica original)
    if (bgVideo) {
      bgVideo.muted = true;
      bgVideo.play().catch((error) => {
        console.warn(
          'El navegador bloqueó momentáneamente el autoplay del background:',
          error,
        );
        setTimeout(() => bgVideo.play(), 100);
      });
    }

    // Ejecutamos exactamente la misma lógica de fuerza para el nuevo video vertical
    if (mockVideo) {
      mockVideo.muted = true;
      mockVideo.play().catch((error) => {
        console.warn(
          'El navegador bloqueó momentáneamente el autoplay del video vertical:',
          error,
        );

        // Intento secundario de respaldo en caso de latencia de carga
        setTimeout(() => mockVideo.play(), 100);
      });
    }
  }
}
