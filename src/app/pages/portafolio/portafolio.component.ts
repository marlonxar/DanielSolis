import { Component, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface ProjectMedia {
  type: 'video' | 'image' | 'drive';
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
  forceReload = 0;

  constructor(private sanitizer: DomSanitizer) {}

  getSafeUrl(url: string): SafeResourceUrl {
    const previewUrl = url
      .replace('/view?usp=sharing', '/preview')
      .replace('/view?usp=drive_link', '/preview')
      .replace('/view', '/preview');
    return this.sanitizer.bypassSecurityTrustResourceUrl(previewUrl);
  }

  projects: Project[] = [
    {
      id: 'fenix',
      name: 'Fénix Aduanal',
      year: '2026',
      logo: 'assets/images/FenixAduanal.png',
      tagline: 'Aniversario 4 años · Video Corporativo',
      description:
        'La narrativa inicia con una llegada en helicóptero del fundador de la empresa, estableciendo inmediatamente una sensación de liderazgo, escala y autoridad. A partir de ahí, el video se transforma en una experiencia visual de alta intensidad que recorre toda la operación de Fénix Aduanal, desde contenedores y procesos logísticos hasta el ritmo acelerado del día a día en oficina, utilizando edición dinámica, tomas cinematográficas y una ejecución diseñada para mantener tensión e impacto en cada segundo.',
      media: [
        { type: 'drive', src: 'https://drive.google.com/file/d/1NWo7CQyDsnnlJPobSlAwYQpln9-rIBEp/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/16dgpe6vS0WBh29aFWKlQGcgfs59jn9cD/view?usp=drive_link' }
      ],
    },
    {
      id: 'gmb',
      name: 'Grupo Motores Británicos',
      year: '2026',
      logo: 'assets/images/GMB.png',
      tagline: 'Land Rover · Can-Am · Sea-Doo',
      description:
        'Para Land Rover, desarrollamos contenido orientado hacia el lujo, sofisticación y experiencia premium, utilizando visuales más limpios y elegantes que refuerzan el posicionamiento exclusivo de la marca. En contraste, el contenido para Can-Am y Sea-Doo se enfoca en adrenalina, velocidad y aventura, creando piezas dinámicas diseñadas para transmitir energía, movimiento y estilo de vida outdoor.',
      media: [
        { type: 'drive', src: 'https://drive.google.com/file/d/1aeeBLuEBAxrCRcfCJ8oxZ7nYAJSX1CA4/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1rpiH5sbWbfsuvNlEg1dfK1tL-8VF6AWM/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1LrZKAsE9_R4NasG3QXRj5XHOGWL3wn4_/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1HPPBln364xYAoKy2IIfwtuxL2LlOsqaD/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1T6RVFOyDduxAKO93eA4iegJ7CYyGmT8d/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1DP9odXqZ_P6j9vSwJESUmrR77eAQCFJn/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1rG7ZgJOtPk2QN8xGQEjk_SbU0Nq9Ny0B/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1cOKP7SeO-QibcqtU7PpEKu4jG40oVxwP/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/193fJ9XW5_lt8UO2TY94vsLX4tzxqUzSa/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1eEm6ouRWlDuNG2f5o92v6mAHyzQgF020/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1Q5wZY4ZTpuCrKwIsK4BfnGB7pnTmmAhS/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1xxX2XcQ8HL6XT_wLm8c7cj0-sywP9XmI/view?usp=drive_link' }
      ],
    },
    {
      id: 'golden-pacific',
      name: 'Golden Pacific',
      year: '2026',
      logo: 'assets/images/GoldenPacific.png',
      tagline: 'Snacks · Lifestyle Tropical · Costa Rica',
      description:
        'A través de contenido short-form, campañas visuales y storytelling enfocado en lifestyle tropical, el objetivo ha sido diferenciar la marca más allá del producto, creando una conexión emocional con consumidores jóvenes mediante una estética fresca, energética y auténtica.',
      media: [
        { type: 'drive', src: 'https://drive.google.com/file/d/1oEZwk0nGsABrm3KgoyTS25Es_W3a5jak/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1pdc4V5qjDDgjSKBBVgNjBbniJmSrjoRY/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1qBoSaXTQk2U7NGF1fAB7LR5zVin62rNI/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1Fijlp5_CiQ0SKE2RZc5vaPGUwT6q2M9k/view?usp=drive_link' }
      ],
    },
    {
      id: 'fitbros',
      name: 'FITBROS Gymwear',
      year: '2026',
      logo: 'assets/images/Fitbros.png',
      tagline: 'Fitness · Cultura · Costa Rica',
      description:
        'Combinando una dirección visual agresiva con edición rápida y una estética inspirada en el contenido deportivo de alto rendimiento, cada producción busca transmitir energía real: entrenamientos, movimiento, disciplina y actitud.',
      media: [
        { type: 'drive', src: 'https://drive.google.com/file/d/1cK4KgrEhp2JfixVOa4G49r-IITvgvV_2/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1g9v74gESmQve1bq6qczK0XlW3Oh_YyFL/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1R_VCvZAIgj-VIZ7Dz8CGCeYgKyaBgfpf/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1FuBbREBkUcO25vyFpqnaRYuFjxb8j_SR/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/16SxXzStkL5IFxgqF-92odqo-uDhdXGjw/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1KTrzTU879bbmo4H50LmzhRzfxnIX4bMh/view?usp=drive_link' }
      ],
    },
    {
      id: 'foodstyling',
      name: 'Food Styling',
      year: '2026',
      logo: 'assets/images/FoodStyle.png',
      tagline: 'Gastronomía · Contenido Visual Premium',
      description:
        'El enfoque va más allá de simplemente mostrar comida: cada escena es diseñada para generar antojo inmediato y elevar la percepción de calidad de la marca a través de contenido premium optimizado para plataformas digitales.',
      media: [
        { type: 'drive', src: 'https://drive.google.com/file/d/1MY47KNw7rFNqBtvoNN21Ceg682UOMDJn/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1wTBz2pLA3YDiCjblYxhbExjYpxzElxsQ/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1SvyAqbiSpbEAAGIXxRmQpNXZapnZeAEI/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1RTgULzBmNT2vLjlvjJ14ZwlgF4PngGTn/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1s1PlgQPAepn-x1NjcO80xqeWBf37xrN8/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1S_1GZ0jentwihU8fD618w1JA-9Er0akg/view?usp=drive_link' },
      ],
    },
    {
      id: 'real-estate',
      name: 'Real Estate',
      year: '2026',
      logo: 'assets/images/RealEstate.png',
      tagline: 'Bienes Raíces · Lujo · Costa Rica',
      description:
        'A través de visuales cinematográficos, movimientos de cámara fluidos y una dirección enfocada en iluminación, amplitud y detalle arquitectónico, el contenido busca transmitir exclusividad, tranquilidad y conexión con el entorno natural.',
      media: [
        { type: 'drive', src: 'https://drive.google.com/file/d/1xT9eDtnxVdB9IUTbdLoTD4p5nspeyJp7/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1YsYfAgBsf9Qn55T_xZVj5mxBC5ZrIcpD/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1twMWRk_usXA01nu8176BQzjXRrLWdPfU/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1z-zj0-SmvoxbmolsX3ifBbCu5R6iLnfj/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1jemqKFHwMFSDaxLjPRBMqnHqJofGR67N/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1B2boWckc61kZRhDcB3gKsDWRYkL3Fpim/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1IHxKjQvtWNsoXnV9Ehlc8p5ZSiDETv7U/view?usp=drive_link' }
      ],
    },
    {
      id: 'podcast',
      name: 'Podcast Clips',
      year: '2026',
      logo: 'assets/images/Podcast.png',
      tagline: 'Storytelling · Marcas · Contenido Orgánico',
      description:
        'Este formato se ha convertido en una herramienta clave de storytelling para diferentes marcas, permitiendo comunicar visión, procesos y personalidad de una manera mucho más cercana y humana.',
      media: [
        { type: 'drive', src: 'https://drive.google.com/file/d/1WdmK66DZzt88zML_8r_eTYqPXpgxYX-1/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1IAXhjaarLGa9Hxz8y5Xax8h1bcTZq1vS/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1TeGVPC982LByXmWmZRYlt8qK111UBAdQ/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1Mu_zWBFg6vjND9INI7xQ_zBcTr3G56Nm/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1y1m5TudojvSMirJtKXSn3RGgP91hNmh2/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1KS59WQkSAHrvC14xj3TzlHIt3vlzHdzB/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1t4DI8J6zClVYecPeuVVGiW7-TJCvtCVC/view?usp=drive_link' },
      ],
    },
    {
      id: 'monkey-box',
      name: 'Monkey Box',
      year: '2026',
      logo: 'assets/images/MonkeyBox.png',
      tagline: 'Logística · Contenido Digital · Tendencias',
      description:
        'La estrategia combina videos educativos, contenido comparativo y piezas más orientadas a entretenimiento, utilizando edición rápida, storytelling directo y una línea visual limpia que mantiene el balance entre claridad y retención de audiencia.',
      media: [
        { type: 'drive', src: 'https://drive.google.com/file/d/1OiKJlsuuKHRI5FR4jRFjQc3tKuSv_vV_/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1eGBdsRWJrL6Akl24Ox2FN8b6PPuWqqFR/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1bPflfY8HTcyMsvm8Mw5mDFqPgyzDoLo-/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1DAFA7HKbt3Ec3GXAppHb7wZdWjJC6Ui39/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1t-WeWQp3lFOnRABN44NwB23dOoqbDDK8/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/16YYssxKr2xmHBoML_gMH4nC18GpUwm8K/view?usp=drive_link' },
      ],
    },
    {
      id: 'fashion',
      name: 'Fashion',
      year: '2026',
      logo: 'assets/images/Fashion.png',
      tagline: 'Moda · Lifestyle · DLabutik',
      description:
        'A través de visuales limpios, dirección dinámica y una línea cinematográfica inspirada en fashion content, el objetivo ha sido elevar la presencia digital de la marca mientras se crea contenido diseñado para captar atención rápidamente.',
      media: [
        { type: 'drive', src: 'https://drive.google.com/file/d/1KTrzTU879bbmo4H50LmzhRzfxnIX4bMh/view?usp=drive_link' },
      ],
    },
    {
      id: 'eventos',
      name: 'Eventos',
      year: '2026',
      logo: 'assets/images/PartiesEvents.png',
      tagline: 'Eventos · Fiestas · Crowd Energy',
      description:
        'A través de visuales cinematográficos, edición dinámica y tomas enfocadas en crowd reaction, iluminación y movimiento, cada pieza busca transmitir la intensidad del momento.',
      media: [
        { type: 'drive', src: 'https://drive.google.com/file/d/1Rr-D51hwSTENId5f5EgrPWUsCGJj0280/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1fKQMmsFSt3nXS5vMB6c3bxVLm0D7cRlN/view?usp=drive_link' },
      ],
    },
  ];

  openProject(project: Project): void {
    this.activeProject = project;
    this.sliderIndex = 0;
    this.isClosing = false;
    this.forceReload = 0;
    document.body.style.overflow = 'hidden';
  }

  closeProject(): void {
    this.isClosing = true;
    setTimeout(() => {
      this.activeProject = null;
      this.sliderIndex = 0;
      this.isClosing = false;
      this.forceReload = 0;
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
      this.forceReload++;
    }
  }

  prevSlide(): void {
    if (this.sliderIndex > 0) {
      this.sliderIndex--;
      this.forceReload++;
    }
  }

  goToSlide(index: number): void {
    this.sliderIndex = index;
    this.forceReload++;
  }

  trackBySlide(index: number): string {
    return `${index}-${this.sliderIndex}-${this.forceReload}`;
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }
}