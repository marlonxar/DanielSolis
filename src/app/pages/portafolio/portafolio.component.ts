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
      description:
        'La narrativa inicia con una llegada en helicóptero del fundador de la empresa, estableciendo inmediatamente una sensación de liderazgo, escala y autoridad. A partir de ahí, el video se transforma en una experiencia visual de alta intensidad que recorre toda la operación de Fénix Aduanal, desde contenedores y procesos logísticos hasta el ritmo acelerado del día a día en oficina, utilizando edición dinámica, tomas cinematográficas y una ejecución diseñada para mantener tensión e impacto en cada segundo.',
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
      description:
        'Para Land Rover, desarrollamos contenido orientado hacia el lujo, sofisticación y experiencia premium, utilizando visuales más limpios y elegantes que refuerzan el posicionamiento exclusivo de la marca. En contraste, el contenido para Can-Am y Sea-Doo se enfoca en adrenalina, velocidad y aventura, creando piezas dinámicas diseñadas para transmitir energía, movimiento y estilo de vida outdoor.',
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
      description:
        'A través de contenido short-form, campañas visuales y storytelling enfocado en lifestyle tropical, el objetivo ha sido diferenciar la marca más allá del producto, creando una conexión emocional con consumidores jóvenes mediante una estética fresca, energética y auténtica.',
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
      description:
        'Combinando una dirección visual agresiva con edición rápida y una estética inspirada en el contenido deportivo de alto rendimiento, cada producción busca transmitir energía real: entrenamientos, movimiento, disciplina y actitud.',
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
      description:
        'El enfoque va más allá de simplemente mostrar comida: cada escena es diseñada para generar antojo inmediato y elevar la percepción de calidad de la marca a través de contenido premium optimizado para plataformas digitales.',
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
      description:
        'A través de visuales cinematográficos, movimientos de cámara fluidos y una dirección enfocada en iluminación, amplitud y detalle arquitectónico, el contenido busca transmitir exclusividad, tranquilidad y conexión con el entorno natural.',
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
      description:
        'Este formato se ha convertido en una herramienta clave de storytelling para diferentes marcas, permitiendo comunicar visión, procesos y personalidad de una manera mucho más cercana y humana.',
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
      description:
        'La estrategia combina videos educativos, contenido comparativo y piezas más orientadas a entretenimiento, utilizando edición rápida, storytelling directo y una línea visual limpia que mantiene el balance entre claridad y retención de audiencia.',
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
      description:
        'A través de visuales limpios, dirección dinámica y una línea cinematográfica inspirada en fashion content, el objetivo ha sido elevar la presencia digital de la marca mientras se crea contenido diseñado para captar atención rápidamente.',
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
      description:
        'A través de visuales cinematográficos, edición dinámica y tomas enfocadas en crowd reaction, iluminación y movimiento, cada pieza busca transmitir la intensidad del momento.',
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