import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RetroComponent } from './pages/retro/retro.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  // Home real
  {
    path: '',
    component: RetroComponent,
    pathMatch: 'full',
    title: 'Daniel Solís — Creative Marketer | Producción Audiovisual CR',
    data: {
      description: 'Dirección creativa, producción audiovisual y estrategia de contenido en Costa Rica.',
      ogTitle: 'Daniel Solís | Estrategia que vende. Contenido que impacta.',
    },
  },

  // Portafolio
  {
    path: 'portafolio',
    component: PortafolioComponent,
    title: 'Portafolio — Daniel Solís | Producción Audiovisual CR',
    data: {
      description: 'Proyectos de video corporativo, contenido para redes sociales y dirección creativa en Costa Rica. Fénix Aduanal, GMB, Golden Pacific y más.',
      ogTitle: 'Portafolio — Daniel Solís | Dirección Creativa Costa Rica',
    },
  },

  // Contacto
  {
    path: 'contacto',
    component: ContactoComponent,
    title: 'Contacto — Daniel Solís | Producción Audiovisual CR',
    data: {
      description: 'Reserva una llamada de 20 minutos gratis y hablemos de tu próximo proyecto. Respuesta en menos de 24 horas.',
      ogTitle: 'Contacto — Daniel Solís | Hablemos de tu proyecto',
    },
  },

  // 404 — wildcard, siempre al final
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Página no encontrada — Daniel Solís',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}