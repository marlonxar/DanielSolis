import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PreviewComponent } from './pages/preview/preview.component';
import { RetroComponent } from './pages/retro/retro.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  {
    path: '',
    component: RetroComponent,
  },
  {
    path: 'portafolio',
    component: PortafolioComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
