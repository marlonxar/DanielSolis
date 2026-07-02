import { Component, HostListener, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface ProjectMedia {
  type: 'video' | 'image' | 'youtube';
  src: string;
  portrait?: boolean;
}

export interface Project {
  id: string;
  name: string;
  year: string;
  logo: string;
  bg?: string;
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
      bg: 'assets/images/fenix-bg.png',
      tagline: 'Aniversario 4 años · Video Corporativo',
      description: `Trabajamos junto a <strong>Fénix Aduanal</strong> en la producción de su <strong>video de aniversario de 4 años</strong>, desarrollando una pieza cinematográfica diseñada para redefinir cómo se percibe una empresa logística en Costa Rica. El objetivo no era generar ventas directas, sino posicionar la marca como una de las operaciones aduanales más <strong>sólidas, modernas y agresivas del país</strong>.<br><br>La narrativa inicia con una llegada en helicóptero del fundador de la empresa, estableciendo inmediatamente una sensación de liderazgo, escala y autoridad. A partir de ahí, el video se transforma en una experiencia visual de alta intensidad que recorre toda la operación de Fénix Aduanal, desde contenedores y procesos logísticos hasta el ritmo acelerado del día a día en oficina, utilizando edición dinámica, tomas cinematográficas y una ejecución diseñada para mantener <strong>tensión e impacto en cada segundo</strong>.<br><br>Filmado durante <strong>cuatro días completos de producción</strong> y desarrollado a lo largo de <strong>dos semanas de edición</strong>, el proyecto marcó un antes y un después para la marca, diferenciándola por completo dentro de una industria donde este tipo de contenido visual simplemente no existía. El resultado fue una pieza creada para transmitir <strong>poder, estructura y visión empresarial</strong> a gran escala.`,
      media: [
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Fenix%20%231/Fe%CC%81nix%20Aniversario%201.mp4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Fenix%20%231/EXPO%2020262.mp4' },
      ],
    },
    {
      id: 'gmb',
      name: 'Grupo Motores Británicos',
      year: '2026',
      logo: 'assets/images/GMB.png',
      bg: 'assets/images/gmb-bg.png',
      tagline: 'Land Rover · Can-Am · Sea-Doo',
      description: `Trabajamos junto a <strong>Grupo Motores Británicos</strong> desarrollando <strong>contenido short-form mensual</strong> para marcas como <strong>Land Rover, Can-Am y Sea-Doo</strong>, creando una estrategia visual enfocada en mantener una presencia digital constante sin comprometer calidad ni identidad de marca. A lo largo de más de <strong>dos años de colaboración</strong>, el enfoque ha sido producir contenido capaz de adaptarse al ADN de cada marca mientras se mantiene una línea visual premium y cinematográfica en todas las plataformas.<br><br>Para <strong>Land Rover</strong>, desarrollamos contenido orientado hacia el lujo, sofisticación y experiencia premium, utilizando visuales más limpios y elegantes que refuerzan el posicionamiento exclusivo de la marca. En contraste, el contenido para <strong>Can-Am y Sea-Doo</strong> se enfoca en adrenalina, velocidad y aventura, creando piezas dinámicas diseñadas para transmitir energía, movimiento y estilo de vida outdoor.<br><br>Con una producción de una a dos grabaciones mensuales, logramos generar un flujo constante de contenido optimizado para redes sociales, permitiendo mantener las plataformas activas con videos de alta calidad que fortalecen tanto la percepción de marca como la conexión con su audiencia. La relación cercana construida durante años de trabajo conjunto ha permitido desarrollar una ejecución creativa alineada completamente con la <strong>visión y estándares del grupo automotriz</strong>.`,
      media: [
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Grupo%20Motores%20Brita%CC%81nicos%20%232/1%20expo%20final%202026.mp4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Grupo%20Motores%20Brita%CC%81nicos%20%232/2-LAND%20ROVER%20DISCOVERY.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Grupo%20Motores%20Brita%CC%81nicos%20%232/3-LANDROVER%20BRP%20CAN-AM%20MAVERICK.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Grupo%20Motores%20Brita%CC%81nicos%20%232/4-LANDROVER%20BRP%20SEADOO.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Grupo%20Motores%20Brita%CC%81nicos%20%232/5-LANDROVER%20BRP%20SEA-DOO%20RXP.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Grupo%20Motores%20Brita%CC%81nicos%20%232/6%20RXPX.mp4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Grupo%20Motores%20Brita%CC%81nicos%20%232/7-LANDROVER%20BRP%20CANAM%20MAVERICK%202.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Grupo%20Motores%20Brita%CC%81nicos%20%232/8-LANDROVER%20DEFENDER.MOV' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Grupo%20Motores%20Brita%CC%81nicos%20%232/9-LAND%20ROVER%20VIDEO%20COLOR.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Grupo%20Motores%20Brita%CC%81nicos%20%232/10-LANDROVER%20BRP%20CAN-AM%20OUTLANDERS.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Grupo%20Motores%20Brita%CC%81nicos%20%232/11%20-%20Explorer%20Pro%20Corregido.mp4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Grupo%20Motores%20Brita%CC%81nicos%20%232/12%20-%20MAVERICK%20MAX%20XRS.mp4' },
      ],
    },
    {
      id: 'golden-pacific',
      name: 'Golden Pacific',
      year: '2026',
      logo: 'assets/images/GoldenPacific.png',
      bg: 'assets/images/golden-bg.png',
      tagline: 'Snacks · Lifestyle Tropical · Costa Rica',
      description: `Trabajamos junto a <strong>Golden Pacific</strong> desarrollando una estrategia de contenido enfocada en posicionar la marca como una propuesta <strong>premium dentro de la industria de snacks en Costa Rica</strong>. Como producto 100% nacional ubicado en Parrita, la marca buscaba fortalecer su identidad costarricense mientras construía una presencia moderna y altamente reconocible en plataformas digitales.<br><br>A través de contenido short-form, campañas visuales y storytelling enfocado en <strong>lifestyle tropical</strong>, el objetivo ha sido diferenciar la marca más allá del producto, creando una conexión emocional con consumidores jóvenes mediante una estética fresca, energética y auténtica. La dirección creativa combina visuales cinematográficos, recetas dinámicas, contenido de producto y campañas diseñadas para transmitir una experiencia asociada al verano, playa, movimiento y estilo de vida tropical.<br><br>Además del contenido orgánico para redes sociales, el proyecto también ha acompañado el crecimiento comercial de la marca mediante campañas enfocadas en <strong>nuevos lanzamientos, expansión en supermercados</strong> y posicionamiento estratégico dentro del mercado nacional.`,
      media: [
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Golden%20Pacific%20%233/1-GOLDEN%20Video%20distribuidores.mp4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Golden%20Pacific%20%233/2-GOLDEN%20Automercado.mp4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Golden%20Pacific%20%233/3-GOLDEN%20Receta%20Navidad.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Golden%20Pacific%20%233/4-GOLDEN%20Video%20Dentro%20de%20Caja%20(espectativa).mp4' },
      ],
    },
    {
      id: 'fitbros',
      name: 'FITBROS Gymwear',
      year: '2026',
      logo: 'assets/images/Fitbros.png',
      bg: 'assets/images/fitbros-bg.png',
      tagline: 'Fitness · Cultura · Costa Rica',
      description: `Con <strong>Fitbros</strong> creamos contenido diseñado para reflejar la <strong>intensidad y mentalidad</strong> detrás de la cultura fitness. Más allá de presentar productos, el enfoque ha sido construir una marca con personalidad propia, tica y utilizando contenido dinámico y visualmente impactante que conecta directamente con una audiencia joven y competitiva.<br><br>Combinando una <strong>dirección visual agresiva</strong> con edición rápida y una estética inspirada en el contenido deportivo de alto rendimiento, cada producción busca transmitir energía real: entrenamientos, movimiento, disciplina y actitud. El resultado son piezas creadas para captar atención de inmediato y reforzar la presencia de la marca dentro del mercado fitness costarricense.<br><br>A través de contenido constante para redes sociales, Fitbros ha logrado mantener una <strong>identidad visual sólida y reconocible</strong>, construyendo una comunidad que no solo consume la marca, sino que se identifica con el estilo de vida que representa.`,
      media: [
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Fitbros%20%234/1-FITBROS%20TUPROTE.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Fitbros%20%234/2-FITBROS%20SHAKER%20Melhofit.mov' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Fitbros%20%234/3-FITBROS%20PROMO%20KONTROLLED.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Fitbros%20%234/4-FITBROS%20Batman.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Fitbros%20%234/5-FITBROS%20Clip%20pan%CC%83os.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Fitbros%20%234/6-FITBROS%20PROMO%20SHIRT.MOV' },
      ],
    },
    {
      id: 'foodstyling',
      name: 'Food Styling',
      year: '2026',
      logo: 'assets/images/FoodStyle.png',
      bg: 'assets/images/food-bg.png',
      tagline: 'Gastronomía · Contenido Visual Premium',
      description: `Desarrollamos contenido de <strong>food styling</strong> enfocado en transformar productos gastronómicos en <strong>experiencias visuales de alto impacto</strong>. Cada producción es creada con una atención extrema al detalle, combinando iluminación, composición, movimiento y dirección cinematográfica para resaltar textura, color y sensación de producto de una manera visualmente irresistible.<br><br>El enfoque va más allá de simplemente mostrar comida: cada escena es diseñada para generar <strong>antojo inmediato</strong> y elevar la percepción de calidad de la marca a través de contenido premium optimizado para plataformas digitales. Desde tomas dinámicas de preparación hasta <strong>close-ups altamente estilizados</strong>, el objetivo es crear piezas que detengan el scroll y conviertan productos cotidianos en contenido visualmente memorable.<br><br>A través de una estética limpia, moderna y cuidadosamente producida, cada proyecto busca mantener un estándar visual consistente capaz de adaptarse a diferentes restaurantes, productos y campañas, siempre priorizando <strong>calidad cinematográfica y dirección creativa de alto nivel</strong>.`,
      media: [
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Foodstyling%20%235/1-EXXQUISITE%20FOODSTYLING.MOV' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Foodstyling%20%235/2-EXXQUISITE%20FOODSTYLING2.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Foodstyling%20%235/3-EXXQUISITE%20FOODSTYLING.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Foodstyling%20%235/4-FOODSTYLING%201%20COCTEL.mov' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Foodstyling%20%235/5-FOODSTYLING%202.MOV' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Foodstyling%20%235/6-FOODSTYLING%203.MOV' },
      ],
    },
    {
      id: 'real-estate',
      name: 'Real Estate',
      year: '2026',
      logo: 'assets/images/RealEstate.png',
      bg: 'assets/images/real-estate-bg.png',
      tagline: 'Bienes Raíces · Lujo · Costa Rica',
      description: `Creamos contenido inmobiliario enfocado en <strong>propiedades de lujo y arquitectura premium</strong>, trabajando junto a marcas como <strong>Inhaus</strong> y diferentes residencias exclusivas ubicadas en las zonas costeras de Costa Rica, especialmente en <strong>Tamarindo</strong>. El enfoque de cada producción ha sido capturar no solo la propiedad, sino el estilo de vida y la experiencia que representa cada espacio.<br><br>A través de visuales cinematográficos, movimientos de cámara fluidos y una dirección enfocada en iluminación, amplitud y detalle arquitectónico, el contenido busca transmitir <strong>exclusividad, tranquilidad y conexión con el entorno natural</strong>. Desde villas modernas con piscinas infinitas hasta propiedades diseñadas para Airbnb y lifestyle costero, cada proyecto fue producido con una estética limpia y aspiracional orientada al <strong>mercado inmobiliario de alto nivel</strong>.<br><br>Más allá de documentar espacios, el objetivo ha sido elevar la percepción de cada proyecto mediante contenido visual capaz de generar impacto inmediato en plataformas digitales y diferenciar cada proyecto dentro de un mercado altamente competitivo.`,
      media: [
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Real%20Estate%20%236/1-REAL%20ESTATE%20CASA%20CAPONERA1.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Real%20Estate%20%236/2-REAL%20ESTATE%20CASA%20AGAPANTO.mp4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Real%20Estate%20%236/3-%20REAL%20ESTATE%20SOHO.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Real%20Estate%20%236/4-REAL%20ESTATE%20CASA%20OSASIS%20TAMARINDO.MOV' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Real%20Estate%20%236/5-REAL%20ESTATE%20NUBIA%20SERVICES.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Real%20Estate%20%236/6-REAL%20ESTATE%20NUBIA%20TEASER.mov' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Real%20Estate%20%236/7-Hoja%20Libre.mp4' },
      ],
    },
    {
      id: 'podcast',
      name: 'Podcast Clips',
      year: '2026',
      logo: 'assets/images/Podcast.png',
      bg: 'assets/images/podcast-bg.png',
      tagline: 'Storytelling · Marcas · Contenido Orgánico',
      description: `Producimos <strong>podcast clips</strong> diseñados para transformar conversaciones en contenido visualmente atractivo y altamente consumible para redes sociales. A través de una combinación de <strong>iluminación cinematográfica, composición limpia y edición dinámica</strong>, cada producción busca mantener una estética premium mientras se prioriza autenticidad y conexión con la audiencia.<br><br>Este formato se ha convertido en una herramienta clave de storytelling para diferentes marcas, permitiendo comunicar visión, procesos y personalidad de una manera mucho más cercana y humana. Proyectos como <strong>Ransome &amp; Jenkin en Londres</strong> han utilizado este tipo de contenido para contar la historia detrás de la marca, su conexión entre diseño londinense y manufactura italiana, así como la filosofía detrás de cada colección.<br><br>Al mismo tiempo, marcas como <strong>Fitbros</strong> han aprovechado este formato para generar contenido más directo y orgánico, fortaleciendo la conexión con su comunidad mediante conversaciones naturales, experiencias personales y contenido enfocado en estilo de vida. Cada producción está diseñada para mantener un balance entre <strong>calidad cinematográfica y autenticidad</strong>.`,
      media: [
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Podcast%20Clips%20%237/1-PODCAST%20TYPE%20CLIP%20%234.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Podcast%20Clips%20%237/2-Lawrence%20First%20Post.mp4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Podcast%20Clips%20%237/3-PODCAST%20TYPE%20CLIP%20%232.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Podcast%20Clips%20%237/4Jack%20Interview.mp4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Podcast%20Clips%20%237/9-POCAST%20TYPE%20CLIP%20%231.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Podcast%20Clips%20%237/9-PODCAST%20TYPE%20CLIP%20%233.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Podcast%20Clips%20%237/9-PODCAST%20TYPE%20CLIP%20%236.MP4' },
      ],
    },
    {
      id: 'monkey-box',
      name: 'Monkey Box',
      year: '2026',
      logo: 'assets/images/MonkeyBox.png',
      bg: 'assets/images/monkey-bg.png',
      tagline: 'Logística · Contenido Digital · Tendencias',
      description: `La estrategia combina <strong>videos educativos, contenido comparativo</strong> y piezas más orientadas a entretenimiento, utilizando edición rápida, storytelling directo y una línea visual limpia que mantiene el balance entre claridad y retención de audiencia. Cada producción busca transmitir <strong>confianza, accesibilidad y rapidez</strong>, reforzando la identidad de Monkey Box como una alternativa moderna dentro de la industria logística.<br><br>A través de contenido constante y adaptable a tendencias digitales, la marca ha logrado mantener una presencia activa en redes sociales mientras fortalece la conexión con una audiencia joven que consume contenido rápido, auténtico y fácil de digerir.`,
      media: [
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Monkey%20Box%20%238/1-MONKEY%20BOX%201.mp4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Monkey%20Box%20%238/2-Monkey%20Box%203.mp4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Monkey%20Box%20%238/3-MONKEY%20BOX%202.mp4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Monkey%20Box%20%238/4-%20Monkey%204.mp4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Monkey%20Box%20%238/5-Monkey%20Box%203.2.mp4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Monkey%20Box%20%238/6-Monkey%20Box%202%20Mayo.mp4' },
      ],
    },
    {
      id: 'fashion',
      name: 'Fashion',
      year: '2026',
      logo: 'assets/images/Fashion.png',
      bg: 'assets/images/fashion-bg.png',
      tagline: 'Moda · Lifestyle · DLabutik',
      description: `Creamos <strong>contenido short-form para DLabutik</strong> enfocado en transmitir una estética moderna, femenina y visualmente atractiva para redes sociales. A través de visuales limpios, dirección dinámica y una <strong>línea cinematográfica inspirada en fashion content</strong>, el objetivo ha sido elevar la presencia digital de la marca mientras se crea contenido diseñado para captar atención rápidamente y fortalecer su identidad dentro del mundo de <strong>moda y lifestyle</strong>.`,
      media: [
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Fashion%20%239/1-DLABUTIK1%20Fashion.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Fashion%20%239/2-DLABUTIK4%20Fashion.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Fashion%20%239/3-DLABUTIK2%20Fashion.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Fashion%20%239/4-DLABUTIK%20Fashion.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Fashion%20%239/5-DLABUTIK5%20Fashion.MP4' },
      ],
    },
    {
      id: 'eventos',
      name: 'Eventos',
      year: '2026',
      logo: 'assets/images/PartiesEvents.png',
      bg: 'assets/images/parties.png',
      tagline: 'Eventos · Fiestas · Crowd Energy',
      description: `A través de <strong>visuales cinematográficos, edición dinámica</strong> y tomas enfocadas en crowd reaction, iluminación y movimiento, cada pieza busca transmitir la intensidad del momento mientras se genera contenido diseñado para aumentar expectativa, fortalecer presencia digital y mantener una conexión constante con la audiencia en redes sociales.`,
      media: [
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Eventos%20-%20Fiestas%20%2310/1-ZOUK%20AFTERMOVIE.MP4' },
        { type: 'video', src: 'https://vectis-daniel-solis.b-cdn.net/Eventos%20-%20Fiestas%20%2310/2-ZOUK%20CUMPLEANOS.mp4' },
      ],
    },
  ];

  openProject(project: Project): void {
    this.activeProject = project;
    this.sliderIndex = 0;
    this.isClosing = false;
    this.forceReload = 0;
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      const btn = document.querySelector<HTMLElement>('.popup-close--desktop') ??
                  document.querySelector<HTMLElement>('.popup-close--mobile');
      btn?.focus();
    }, 50);
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

  get currentMediaIsPortrait(): boolean {
    return this.activeProject?.media[this.sliderIndex]?.type === 'video';
  }

  trackBySlide(index: number): string {
    return `${index}-${this.sliderIndex}-${this.forceReload}`;
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }
}