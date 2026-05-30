import { Component, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ProjectMedia {
  type: 'video' | 'image';
  src: string;
}

export interface Project {
  id: string;
  name: string;
  year: string;
  logo: string;
  tagline: string;
  description: string;
  media: ProjectMedia[];
}

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss'],
})
export class PortafolioComponent implements OnDestroy {

  activeProject: Project | null = null;
  sliderIndex = 0;
  isClosing = false;

  projects: Project[] = [
    {
      id: 'fenix',
      name: 'Fénix Aduanal',
      year: '2026',
      logo: 'assets/images/fenixLogo.png',
      tagline: 'Aniversario 4 años · Video Corporativo',
      description:
        'La narrativa inicia con una llegada en helicóptero del fundador de la empresa, estableciendo inmediatamente una sensación de liderazgo, escala y autoridad. A partir de ahí, el video se transforma en una experiencia visual de alta intensidad que recorre toda la operación de Fénix Aduanal, desde contenedores y procesos logísticos hasta el ritmo acelerado del día a día en oficina, utilizando edición dinámica, tomas cinematográficas y una ejecución diseñada para mantener tensión e impacto en cada segundo.',
      media: [
        { type: 'video', src: 'assets/videos/testVideo.mp4' },
      ],
    },
    {
      id: 'gmb',
      name: 'Grupo Motores Británicos',
      year: '2026',
      logo: 'assets/images/gmbLogo.png',
      tagline: 'Land Rover · Can-Am · Sea-Doo',
      description:
        'Para Land Rover, desarrollamos contenido orientado hacia el lujo, sofisticación y experiencia premium, utilizando visuales más limpios y elegantes que refuerzan el posicionamiento exclusivo de la marca. En contraste, el contenido para Can-Am y Sea-Doo se enfoca en adrenalina, velocidad y aventura, creando piezas dinámicas diseñadas para transmitir energía, movimiento y estilo de vida outdoor.',
      media: [
        { type: 'video', src: 'assets/Portfolio/Grupo Motores Británicos/Explorer Pro Corregido.mp4' },
        { type: 'video', src: 'assets/Portfolio/Grupo Motores Británicos/MAVERICK MAX XRS.mp4' },
      ],
    },
    {
      id: 'golden-pacific',
      name: 'Golden Pacific',
      year: '2026',
      logo: 'assets/images/goldenPacificLogo.png',
      tagline: 'Snacks · Lifestyle Tropical · Costa Rica',
      description:
        'A través de contenido short-form, campañas visuales y storytelling enfocado en lifestyle tropical, el objetivo ha sido diferenciar la marca más allá del producto, creando una conexión emocional con consumidores jóvenes mediante una estética fresca, energética y auténtica.',
      media: [
        { type: 'video', src: 'assets/Portfolio/Golden Pacific/2-GOLDEN Video Dentro de Caja (espectativa).mp4' },
        { type: 'video', src: 'assets/Portfolio/Golden Pacific/2-GOLDEN Video distribuidores.mp4' },
      ],
    },
    {
      id: 'fitbros',
      name: 'FITBROS Gymwear',
      year: '2026',
      logo: 'assets/images/fitbrosLogo.png',
      tagline: 'Fitness · Cultura · Costa Rica',
      description:
        'Combinando una dirección visual agresiva con edición rápida y una estética inspirada en el contenido deportivo de alto rendimiento, cada producción busca transmitir energía real: entrenamientos, movimiento, disciplina y actitud.',
      media: [
        { type: 'video', src: 'assets/videos/testVideo.mp4' },
      ],
    },
    {
      id: 'foodstyling',
      name: 'Food Styling',
      year: '2026',
      logo: 'assets/images/foodStylingLogo.png',
      tagline: 'Gastronomía · Contenido Visual Premium',
      description:
        'El enfoque va más allá de simplemente mostrar comida: cada escena es diseñada para generar antojo inmediato y elevar la percepción de calidad de la marca a través de contenido premium optimizado para plataformas digitales.',
      media: [
        { type: 'video', src: 'assets/videos/testVideo.mp4' },
      ],
    },
    {
      id: 'real-estate',
      name: 'Real Estate',
      year: '2026',
      logo: 'assets/images/realEstateLogo.png',
      tagline: 'Bienes Raíces · Lujo · Costa Rica',
      description:
        'A través de visuales cinematográficos, movimientos de cámara fluidos y una dirección enfocada en iluminación, amplitud y detalle arquitectónico, el contenido busca transmitir exclusividad, tranquilidad y conexión con el entorno natural.',
      media: [
        { type: 'video', src: 'assets/Portfolio/Real Estate/8-REAL ESTATE CASA AGAPANTO.mp4' },
      ],
    },
    {
      id: 'podcast',
      name: 'Podcast Clips',
      year: '2026',
      logo: 'assets/images/podcastLogo.png',
      tagline: 'Storytelling · Marcas · Contenido Orgánico',
      description:
        'Este formato se ha convertido en una herramienta clave de storytelling para diferentes marcas, permitiendo comunicar visión, procesos y personalidad de una manera mucho más cercana y humana.',
      media: [
        { type: 'video', src: 'assets/videos/testVideo.mp4' },
      ],
    },
    {
      id: 'monkey-box',
      name: 'Monkey Box',
      year: '2026',
      logo: 'assets/images/monkeyBoxLogo.png',
      tagline: 'Logística · Contenido Digital · Tendencias',
      description:
        'La estrategia combina videos educativos, contenido comparativo y piezas más orientadas a entretenimiento, utilizando edición rápida, storytelling directo y una línea visual limpia que mantiene el balance entre claridad y retención de audiencia.',
      media: [
        { type: 'video', src: 'assets/Portfolio/Monkey Box/1-MONKEY BOX 1.mp4' },
        { type: 'video', src: 'assets/Portfolio/Monkey Box/1-MONKEY BOX 2.mp4' },
        { type: 'video', src: 'assets/Portfolio/Monkey Box/Monkey 4.mp4' },
        { type: 'video', src: 'assets/Portfolio/Monkey Box/Monkey Box 2 Mayo.mp4' },
      ],
    },
    {
      id: 'fashion',
      name: 'Fashion',
      year: '2026',
      logo: 'assets/images/fashionLogo.png',
      tagline: 'Moda · Lifestyle · DLabutik',
      description:
        'A través de visuales limpios, dirección dinámica y una línea cinematográfica inspirada en fashion content, el objetivo ha sido elevar la presencia digital de la marca mientras se crea contenido diseñado para captar atención rápidamente.',
      media: [
        { type: 'video', src: 'assets/videos/testVideo.mp4' },
      ],
    },
    {
      id: 'eventos',
      name: 'Eventos',
      year: '2026',
      logo: 'assets/images/eventosLogo.png',
      tagline: 'Eventos · Fiestas · Crowd Energy',
      description:
        'A través de visuales cinematográficos, edición dinámica y tomas enfocadas en crowd reaction, iluminación y movimiento, cada pieza busca transmitir la intensidad del momento.',
      media: [
        { type: 'video', src: 'assets/Portfolio/Fitbros/5-FITBROSBatman.MP4' },
      ],
    },
  ];

  openProject(project: Project): void {
    this.activeProject = project;
    this.sliderIndex = 0;
    this.isClosing = false;
    document.body.style.overflow = 'hidden';
  }

  closeProject(): void {
    this.isClosing = true;
    setTimeout(() => {
      this.activeProject = null;
      this.sliderIndex = 0;
      this.isClosing = false;
      document.body.style.overflow = '';
    }, 350);
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('project-popup')) {
      this.closeProject();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.activeProject) this.closeProject();
  }

  nextSlide(): void {
    if (this.activeProject && this.sliderIndex < this.activeProject.media.length - 1) {
      this.sliderIndex++;
    }
  }

  prevSlide(): void {
    if (this.sliderIndex > 0) {
      this.sliderIndex--;
    }
  }

  goToSlide(index: number): void {
    this.sliderIndex = index;
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }
}