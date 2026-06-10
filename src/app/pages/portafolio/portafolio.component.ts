import { Component, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface ProjectMedia {
  type: 'video' | 'image' | 'drive' | 'cloudinary';
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
    const driveUrl = url
      .replace('/view?usp=sharing', '/preview')
      .replace('/view?usp=drive_link', '/preview')
      .replace('/view', '/preview');
    return this.sanitizer.bypassSecurityTrustResourceUrl(driveUrl);
  }

  getCloudinaryUrl(src: string): SafeResourceUrl {
    const url = `https://player.cloudinary.com/embed/?cloud_name=dqn3tiikr&public_id=${src}&autoplay=true&muted=true&loop=true&controls=true&fluid=true`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
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
        { type: 'cloudinary', src: 'Fénix_Aniversario_compressed_yempll' },
        { type: 'cloudinary', src: 'EXPO_2026_compressed_b5fb0h' },
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
        { type: 'cloudinary', src: '3-LANDROVER_DEFENDER_duylim' },
        { type: 'cloudinary', src: '3-LANDROVER_BRP_CANAM_MAVERICK_2_gewdh5' },
        { type: 'cloudinary', src: 'MAVERICK_MAX_XRS_ih25wr' },
        { type: 'cloudinary', src: 'Explorer_Pro_Corregido_ts5dbb' },
        { type: 'cloudinary', src: '3-LAND_ROVER_DISCOVERY_compressed_jrtqae' },
        { type: 'cloudinary', src: '3-LANDROVER_BRP_CAN-AM_MAVERICK_compressed_icofft' },
        { type: 'cloudinary', src: 'expo_final_2026_compressed_ngyfzh' },
        { type: 'cloudinary', src: '3-LAND_ROVER_VIDEO_COLOR_compressed_m0lqvk' },
        { type: 'cloudinary', src: '3-LANDROVER_BRP_SEADOO_compressed_xwoglb' },
        { type: 'cloudinary', src: 'RXPX_compressed_a2f8kq' },
        { type: 'cloudinary', src: '3-LANDROVER_BRP_SEA-DOO_RXP_compressed_wzicso' },
        { type: 'cloudinary', src: '3-LANDROVER_BRP_CAN-AM_OUTLANDERS_compressed_yfnmp6' },
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
        { type: 'cloudinary', src: '2-GOLDEN_Video_Dentro_de_Caja_espectativa_jjbsnl' },
        { type: 'cloudinary', src: '2-GOLDEN_Receta_Navidad_mug5yi' },
        { type: 'cloudinary', src: '2-GOLDEN_Automercado_compressed_c5uk2v' },
        { type: 'cloudinary', src: '2-GOLDEN_Video_distribuidores_compressed_k59l4m' },
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
        { type: 'cloudinary', src: '5-FITBROS_SHAKER_Melhofit_smytkt' },
        { type: 'cloudinary', src: '5-FITBROS_PROMO_SHIRT_tsztip' },
        { type: 'cloudinary', src: '5-FITBROS_Clip_paños_prhmra' },
        { type: 'cloudinary', src: '5-FITBROS_Batman_compressed_ujhofd' },
        { type: 'cloudinary', src: '5-FITBROS_PROMO_KONTROLLED_compressed_v35or7' },
        { type: 'cloudinary', src: '5-FITBROS_TUPROTE_compressed_hzswbu' },
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
        { type: 'cloudinary', src: '7-FOODSTYLING_3_dotrm7' },
        { type: 'cloudinary', src: '7-FOODSTYLING_2_eh7bbl' },
        { type: 'cloudinary', src: '7-EXXQUISITE_FOODSTYLING_a1oryw' },
        { type: 'cloudinary', src: '7-EXXQUISITE_FOODSTYLING2_nbjomr' },
        { type: 'cloudinary', src: '7-EXXQUISITE_FOODSTYLING_compressed_hypqxj' },
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
        { type: 'cloudinary', src: '8-REAL_ESTATE_CASA_OSASIS_TAMARINDO_wtxrhg' },
        { type: 'cloudinary', src: '8-REAL_ESTATE_CASA_AGAPANTO_u7p4hm' },
        { type: 'cloudinary', src: '8-REAL_ESTATE_NUBIA_SERVICES_compressed_qtbvul' },
        { type: 'cloudinary', src: 'Hoja_Libre_compressed_fqgr78' },
        { type: 'cloudinary', src: '8-REAL_ESTATE_SOHO_compressed_pdbc2l' },
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
        { type: 'cloudinary', src: '9-POCAST_TYPE_CLIP_1_eo1o5i' },
        { type: 'cloudinary', src: '9-PODCAST_TYPE_CLIP_2_kkfsth' },
        { type: 'cloudinary', src: '9-PODCAST_TYPE_CLIP_3_csuqn5' },
        { type: 'cloudinary', src: '9-PODCAST_TYPE_CLIP_4_vux0tb' },
        { type: 'cloudinary', src: '9-PODCAST_TYPE_CLIP_6_dge5xg' },
        { type: 'cloudinary', src: 'Jack_Interview_compressed_k1cstg' },
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
        { type: 'cloudinary', src: 'Monkey_Box_3_ik94jm' },
        { type: 'cloudinary', src: '1-MONKEY_BOX_2_lgpszp' },
        { type: 'cloudinary', src: 'Monkey_Box_3.2_compressed_sz4xhb' },
        { type: 'cloudinary', src: 'Monkey_Box_2_Mayo_compressed_hazvsg' },
        { type: 'cloudinary', src: '1-MONKEY_BOX_1_compressed_gemzt6' },
        { type: 'cloudinary', src: 'Monkey_4_compressed_xmin9d' },
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
        { type: 'cloudinary', src: '4-DLABUTIK2_Fashion_compressed_rtxfqb' },
        { type: 'cloudinary', src: '4-DLABUTIK_Fashion_compressed_dnsuaj' },
        { type: 'cloudinary', src: '4-DLABUTIK4_Fashion_compressed_y45ysz' },
        { type: 'cloudinary', src: '4-DLABUTIK5_Fashion_compressed_gaykpd' },
        { type: 'cloudinary', src: '4-DLABUTIK1_Fashion_compressed_gvcppv' },
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
        { type: 'cloudinary', src: 'EventsVideo1' },
        { type: 'cloudinary', src: '6-ZOUK_CUMPLEANOS_compressed_dtv1ty' },
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