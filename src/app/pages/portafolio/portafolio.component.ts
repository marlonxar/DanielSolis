import { Component, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface ProjectMedia {
  type: 'video' | 'image' | 'drive' | 'youtube';
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

  private readonly _urlCache = new Map<string, SafeResourceUrl>();

  constructor(private sanitizer: DomSanitizer) {}

  getSafeUrl(url: string): SafeResourceUrl {
    const cached = this._urlCache.get(url);
    if (cached) return cached;

    const id = url.match(/\/d\/([a-zA-Z0-9_-]+)/)?.[1];
    const embedUrl = id
      ? `https://drive.google.com/file/d/${id}/preview?autoplay=1`
      : url.replace(/\/view(\?.*)?$/, '/preview') + '?autoplay=1';

    const safe = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    this._urlCache.set(url, safe);
    return safe;
  }

  getYoutubeUrl(videoId: string): SafeResourceUrl {
    const cached = this._urlCache.get(videoId);
    if (cached) return cached;

    const url = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&rel=0`;
    const safe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this._urlCache.set(videoId, safe);
    return safe;
  }


  projects: Project[] = [
    {
      id: 'fenix',
      name: 'Fénix Aduanal',
      year: '2026',
      logo: 'assets/images/FenixAduanal.png',
      tagline: 'Aniversario 4 años · Video Corporativo',
      description: `Trabajamos junto a <strong>Fénix Aduanal</strong> en la producción de su <strong>video de aniversario de 4 años</strong>, desarrollando una pieza cinematográfica diseñada para redefinir cómo se percibe una empresa logística en Costa Rica. El objetivo no era generar ventas directas, sino posicionar la marca como una de las operaciones aduanales más <strong>sólidas, modernas y agresivas del país</strong>.<br><br>La narrativa inicia con una llegada en helicóptero del fundador de la empresa, estableciendo inmediatamente una sensación de liderazgo, escala y autoridad. A partir de ahí, el video se transforma en una experiencia visual de alta intensidad que recorre toda la operación de Fénix Aduanal, desde contenedores y procesos logísticos hasta el ritmo acelerado del día a día en oficina, utilizando edición dinámica, tomas cinematográficas y una ejecución diseñada para mantener <strong>tensión e impacto en cada segundo</strong>.<br><br>Filmado durante <strong>cuatro días completos de producción</strong> y desarrollado a lo largo de <strong>dos semanas de edición</strong>, el proyecto marcó un antes y un después para la marca, diferenciándola por completo dentro de una industria donde este tipo de contenido visual simplemente no existía. El resultado fue una pieza creada para transmitir <strong>poder, estructura y visión empresarial</strong> a gran escala.`,
      media: [
        { type: 'youtube', src: 'u9zxCslRbdk' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1NWo7CQyDsnnlJPobSlAwYQpln9-rIBEp/view?usp=drive_link' },
      ],
    },
    {
      id: 'gmb',
      name: 'Grupo Motores Británicos',
      year: '2026',
      logo: 'assets/images/GMB.png',
      tagline: 'Land Rover · Can-Am · Sea-Doo',
      description: `Trabajamos junto a <strong>Grupo Motores Británicos</strong> desarrollando <strong>contenido short-form mensual</strong> para marcas como <strong>Land Rover, Can-Am y Sea-Doo</strong>, creando una estrategia visual enfocada en mantener una presencia digital constante sin comprometer calidad ni identidad de marca. A lo largo de más de <strong>dos años de colaboración</strong>, el enfoque ha sido producir contenido capaz de adaptarse al ADN de cada marca mientras se mantiene una línea visual premium y cinematográfica en todas las plataformas.<br><br>Para <strong>Land Rover</strong>, desarrollamos contenido orientado hacia el lujo, sofisticación y experiencia premium, utilizando visuales más limpios y elegantes que refuerzan el posicionamiento exclusivo de la marca. En contraste, el contenido para <strong>Can-Am y Sea-Doo</strong> se enfoca en adrenalina, velocidad y aventura, creando piezas dinámicas diseñadas para transmitir energía, movimiento y estilo de vida outdoor.<br><br>Con una producción de una a dos grabaciones mensuales, logramos generar un flujo constante de contenido optimizado para redes sociales, permitiendo mantener las plataformas activas con videos de alta calidad que fortalecen tanto la percepción de marca como la conexión con su audiencia. La relación cercana construida durante años de trabajo conjunto ha permitido desarrollar una ejecución creativa alineada completamente con la <strong>visión y estándares del grupo automotriz</strong>.`,
      media: [
        { type: 'drive', src: 'https://drive.google.com/file/d/1eEm6ouRWlDuNG2f5o92v6mAHyzQgF020/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1aeeBLuEBAxrCRcfCJ8oxZ7nYAJSX1CA4/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1LrZKAsE9_R4NasG3QXRj5XHOGWL3wn4_/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1rG7ZgJOtPk2QN8xGQEjk_SbU0Nq9Ny0B/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1DP9odXqZ_P6j9vSwJESUmrR77eAQCFJn/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1xxX2XcQ8HL6XT_wLm8c7cj0-sywP9XmI/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1T6RVFOyDduxAKO93eA4iegJ7CYyGmT8d/view?usp=drive_link' },
        { type: 'youtube', src: '86MSAW-qTRM' },
        { type: 'youtube', src: 'LA03UsOvj2s' },
        { type: 'youtube', src: '0w5SH7qbENw' },
        { type: 'youtube', src: 'U1dF4wdpnPs' },
        { type: 'youtube', src: 'yUsTLicDY5c' },
      ],
    },
    {
      id: 'golden-pacific',
      name: 'Golden Pacific',
      year: '2026',
      logo: 'assets/images/GoldenPacific.png',
      tagline: 'Snacks · Lifestyle Tropical · Costa Rica',
      description: `Trabajamos junto a <strong>Golden Pacific</strong> desarrollando una estrategia de contenido enfocada en posicionar la marca como una propuesta <strong>premium dentro de la industria de snacks en Costa Rica</strong>. Como producto 100% nacional ubicado en Parrita, la marca buscaba fortalecer su identidad costarricense mientras construía una presencia moderna y altamente reconocible en plataformas digitales.<br><br>A través de contenido short-form, campañas visuales y storytelling enfocado en <strong>lifestyle tropical</strong>, el objetivo ha sido diferenciar la marca más allá del producto, creando una conexión emocional con consumidores jóvenes mediante una estética fresca, energética y auténtica. La dirección creativa combina visuales cinematográficos, recetas dinámicas, contenido de producto y campañas diseñadas para transmitir una experiencia asociada al verano, playa, movimiento y estilo de vida tropical.<br><br>Además del contenido orgánico para redes sociales, el proyecto también ha acompañado el crecimiento comercial de la marca mediante campañas enfocadas en <strong>nuevos lanzamientos, expansión en supermercados</strong> y posicionamiento estratégico dentro del mercado nacional.`,
      media: [
        { type: 'youtube', src: 'MxE1g17F_t0' },
        { type: 'youtube', src: 'fUSuC_j-0eE' },
        { type: 'youtube', src: 'vEw5RJRLdDU' },
        { type: 'youtube', src: '3P_DvMJ1ebI' },
      ],
    },
    {
      id: 'fitbros',
      name: 'FITBROS Gymwear',
      year: '2026',
      logo: 'assets/images/Fitbros.png',
      tagline: 'Fitness · Cultura · Costa Rica',
      description: `Con <strong>Fitbros</strong> creamos contenido diseñado para reflejar la <strong>intensidad y mentalidad</strong> detrás de la cultura fitness. Más allá de presentar productos, el enfoque ha sido construir una marca con personalidad propia, tica y utilizando contenido dinámico y visualmente impactante que conecta directamente con una audiencia joven y competitiva.<br><br>Combinando una <strong>dirección visual agresiva</strong> con edición rápida y una estética inspirada en el contenido deportivo de alto rendimiento, cada producción busca transmitir energía real: entrenamientos, movimiento, disciplina y actitud. El resultado son piezas creadas para captar atención de inmediato y reforzar la presencia de la marca dentro del mercado fitness costarricense.<br><br>A través de contenido constante para redes sociales, Fitbros ha logrado mantener una <strong>identidad visual sólida y reconocible</strong>, construyendo una comunidad que no solo consume la marca, sino que se identifica con el estilo de vida que representa.`,
      media: [
        { type: 'youtube', src: 'RpmMDb-OvJA' },
        { type: 'drive', src: 'https://drive.google.com/file/d/16SxXzStkL5IFxgqF-92odqo-uDhdXGjw/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1R_VCvZAIgj-VIZ7Dz8CGCeYgKyaBgfpf/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1cK4KgrEhp2JfixVOa4G49r-IITvgvV_2/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1g9v74gESmQve1bq6qczK0XlW3Oh_YyFL/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1FuBbREBkUcO25vyFpqnaRYuFjxb8j_SR/view?usp=drive_link' },
      ],
    },
    {
      id: 'foodstyling',
      name: 'Food Styling',
      year: '2026',
      logo: 'assets/images/FoodStyle.png',
      tagline: 'Gastronomía · Contenido Visual Premium',
      description: `Desarrollamos contenido de <strong>food styling</strong> enfocado en transformar productos gastronómicos en <strong>experiencias visuales de alto impacto</strong>. Cada producción es creada con una atención extrema al detalle, combinando iluminación, composición, movimiento y dirección cinematográfica para resaltar textura, color y sensación de producto de una manera visualmente irresistible.<br><br>El enfoque va más allá de simplemente mostrar comida: cada escena es diseñada para generar <strong>antojo inmediato</strong> y elevar la percepción de calidad de la marca a través de contenido premium optimizado para plataformas digitales. Desde tomas dinámicas de preparación hasta <strong>close-ups altamente estilizados</strong>, el objetivo es crear piezas que detengan el scroll y conviertan productos cotidianos en contenido visualmente memorable.<br><br>A través de una estética limpia, moderna y cuidadosamente producida, cada proyecto busca mantener un estándar visual consistente capaz de adaptarse a diferentes restaurantes, productos y campañas, siempre priorizando <strong>calidad cinematográfica y dirección creativa de alto nivel</strong>.`,
      media: [
        { type: 'drive', src: 'https://drive.google.com/file/d/1MY47KNw7rFNqBtvoNN21Ceg682UOMDJn/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1SvyAqbiSpbEAAGIXxRmQpNXZapnZeAEI/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1wTBz2pLA3YDiCjblYxhbExjYpxzElxsQ/view?usp=drive_link' },
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
      description: `Creamos contenido inmobiliario enfocado en <strong>propiedades de lujo y arquitectura premium</strong>, trabajando junto a marcas como <strong>Inhaus</strong> y diferentes residencias exclusivas ubicadas en las zonas costeras de Costa Rica, especialmente en <strong>Tamarindo</strong>. El enfoque de cada producción ha sido capturar no solo la propiedad, sino el estilo de vida y la experiencia que representa cada espacio.<br><br>A través de visuales cinematográficos, movimientos de cámara fluidos y una dirección enfocada en iluminación, amplitud y detalle arquitectónico, el contenido busca transmitir <strong>exclusividad, tranquilidad y conexión con el entorno natural</strong>. Desde villas modernas con piscinas infinitas hasta propiedades diseñadas para Airbnb y lifestyle costero, cada proyecto fue producido con una estética limpia y aspiracional orientada al <strong>mercado inmobiliario de alto nivel</strong>.<br><br>Más allá de documentar espacios, el objetivo ha sido elevar la percepción de cada proyecto mediante contenido visual capaz de generar impacto inmediato en plataformas digitales y diferenciar cada proyecto dentro de un mercado altamente competitivo.`,
      media: [
        { type: 'drive', src: 'https://drive.google.com/file/d/1YsYfAgBsf9Qn55T_xZVj5mxBC5ZrIcpD/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1xT9eDtnxVdB9IUTbdLoTD4p5nspeyJp7/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1B2boWckc61kZRhDcB3gKsDWRYkL3Fpim/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1twMWRk_usXA01nu8176BQzjXRrLWdPfU/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1z-zj0-SmvoxbmolsX3ifBbCu5R6iLnfj/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1jemqKFHwMFSDaxLjPRBMqnHqJofGR67N/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1IHxKjQvtWNsoXnV9Ehlc8p5ZSiDETv7U/view?usp=drive_link' },
      ],
    },
    {
      id: 'podcast',
      name: 'Podcast Clips',
      year: '2026',
      logo: 'assets/images/Podcast.png',
      tagline: 'Storytelling · Marcas · Contenido Orgánico',
      description: `Producimos <strong>podcast clips</strong> diseñados para transformar conversaciones en contenido visualmente atractivo y altamente consumible para redes sociales. A través de una combinación de <strong>iluminación cinematográfica, composición limpia y edición dinámica</strong>, cada producción busca mantener una estética premium mientras se prioriza autenticidad y conexión con la audiencia.<br><br>Este formato se ha convertido en una herramienta clave de storytelling para diferentes marcas, permitiendo comunicar visión, procesos y personalidad de una manera mucho más cercana y humana. Proyectos como <strong>Ransome &amp; Jenkin en Londres</strong> han utilizado este tipo de contenido para contar la historia detrás de la marca, su conexión entre diseño londinense y manufactura italiana, así como la filosofía detrás de cada colección.<br><br>Al mismo tiempo, marcas como <strong>Fitbros</strong> han aprovechado este formato para generar contenido más directo y orgánico, fortaleciendo la conexión con su comunidad mediante conversaciones naturales, experiencias personales y contenido enfocado en estilo de vida. Cada producción está diseñada para mantener un balance entre <strong>calidad cinematográfica y autenticidad</strong>.`,
      media: [
        { type: 'drive', src: 'https://drive.google.com/file/d/1Mu_zWBFg6vjND9INI7xQ_zBcTr3G56Nm/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1t4DI8J6zClVYecPeuVVGiW7-TJCvtCVC/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1IAXhjaarLGa9Hxz8y5Xax8h1bcTZq1vS/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1KS59WQkSAHrvC14xj3TzlHIt3vlzHdzB/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1WdmK66DZzt88zML_8r_eTYqPXpgxYX-1/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1TeGVPC982LByXmWmZRYlt8qK111UBAdQ/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1y1m5TudojvSMirJtKXSn3RGgP91hNmh2/view?usp=drive_link' },
      ],
    },
    {
      id: 'monkey-box',
      name: 'Monkey Box',
      year: '2026',
      logo: 'assets/images/MonkeyBox.png',
      tagline: 'Logística · Contenido Digital · Tendencias',
      description: `La estrategia combina <strong>videos educativos, contenido comparativo</strong> y piezas más orientadas a entretenimiento, utilizando edición rápida, storytelling directo y una línea visual limpia que mantiene el balance entre claridad y retención de audiencia. Cada producción busca transmitir <strong>confianza, accesibilidad y rapidez</strong>, reforzando la identidad de Monkey Box como una alternativa moderna dentro de la industria logística.<br><br>A través de contenido constante y adaptable a tendencias digitales, la marca ha logrado mantener una presencia activa en redes sociales mientras fortalece la conexión con una audiencia joven que consume contenido rápido, auténtico y fácil de digerir.`,
      media: [
        { type: 'drive', src: 'https://drive.google.com/file/d/1OiKJlsuuKHRI5FR4jRFjQc3tKuSv_vV_/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/16YYssxKr2xmHBoML_gMH4nC18GpUwm8K/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1eGBdsRWJrL6Akl24Ox2FN8b6PPuWqqFR/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1bPflfY8HTcyMsvm8Mw5mDFqPgyzDoLo-/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1t-WeWQp3lFOnRABN44NwB23dOoqbDDK8/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1DAFA7HKbt3Ec3GXQNHb7wZdWjJC6Ui39/view?usp=drive_link' },
      ],
    },
    {
      id: 'fashion',
      name: 'Fashion',
      year: '2026',
      logo: 'assets/images/Fashion.png',
      tagline: 'Moda · Lifestyle · DLabutik',
      description: `Creamos <strong>contenido short-form para DLabutik</strong> enfocado en transmitir una estética moderna, femenina y visualmente atractiva para redes sociales. A través de visuales limpios, dirección dinámica y una <strong>línea cinematográfica inspirada en fashion content</strong>, el objetivo ha sido elevar la presencia digital de la marca mientras se crea contenido diseñado para captar atención rápidamente y fortalecer su identidad dentro del mundo de <strong>moda y lifestyle</strong>.`,
      media: [
        { type: 'drive', src: 'https://drive.google.com/file/d/1ssk2owX9-S5bLBE69CxbrEK2j-acDYcL/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1k52rQxoIqsG_zWtMFkM1WWDy06AlTXGE/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1DKoG6kssN6Fgrw8smWbbJPk8qykorHP9/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1dJPEbbxpi3ehQUtksyOpQIRXw2rr8XNX/view?usp=drive_link' },
        { type: 'drive', src: 'https://drive.google.com/file/d/1tcfgvOwUl5yRA_4NaX9pfvW37VGgpk0p/view?usp=drive_link' },
      ],
    },
    {
      id: 'eventos',
      name: 'Eventos',
      year: '2026',
      logo: 'assets/images/PartiesEvents.png',
      tagline: 'Eventos · Fiestas · Crowd Energy',
      description: `A través de <strong>visuales cinematográficos, edición dinámica</strong> y tomas enfocadas en crowd reaction, iluminación y movimiento, cada pieza busca transmitir la intensidad del momento mientras se genera contenido diseñado para aumentar expectativa, fortalecer presencia digital y mantener una conexión constante con la audiencia en redes sociales.`,
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
    this.driveHintDismissed = false;
  }

  trackBySlide(index: number): string {
    return `${index}-${this.sliderIndex}-${this.forceReload}`;
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }
}