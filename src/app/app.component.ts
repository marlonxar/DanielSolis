import { Component, OnInit, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'danielsolis-fe';

  private routerSub?: Subscription;
  private kickoff = () => this.playAllVideos();

  constructor(
    private seo: SeoService,
    private router: Router,
    private zone: NgZone,
  ) {}

  ngOnInit(): void {
    this.seo.init();
  }

  ngAfterViewInit(): void {
    // Intento inicial (autoplay normal en navegadores que lo permiten)
    this.playAllVideos();

    // Fallback: si el autoplay está bloqueado (iOS Low Power Mode, batería baja,
    // datos reducidos, etc.), arrancamos todos los videos apenas el usuario
    // toca o hace clic en cualquier parte. Así nunca se queda la caja con el
    // botón de play que el cliente percibía como "error".
    const opts: AddEventListenerOptions = { once: true, passive: true };
    window.addEventListener('touchstart', this.kickoff, opts);
    window.addEventListener('click', this.kickoff, opts);
    window.addEventListener('keydown', this.kickoff, opts);

    // Al cambiar de ruta (Angular monta nuevos <video>), los reproducimos.
    this.routerSub = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => setTimeout(() => this.playAllVideos(), 0));

    // Reanudar cuando la pestaña vuelve a estar visible.
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') this.playAllVideos();
    });
  }

  private playAllVideos(): void {
    // Corre fuera de Angular para no disparar detección de cambios innecesaria.
    this.zone.runOutsideAngular(() => {
      const videos = document.querySelectorAll<HTMLVideoElement>('video');
      videos.forEach((v) => {
        v.muted = true; // requisito para autoplay sin gesto del usuario
        const p = v.play();
        if (p && typeof p.catch === 'function') {
          p.catch(() => {
            // Sigue bloqueado (sin interacción todavía). El poster cubre la vista
            // y el video arrancará en el primer toque del usuario.
          });
        }
      });
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('touchstart', this.kickoff);
    window.removeEventListener('click', this.kickoff);
    window.removeEventListener('keydown', this.kickoff);
    this.routerSub?.unsubscribe();
  }
}
