import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
} from '@angular/core';

interface NavLink {
  label: string;
  path: string;
  exact: boolean;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {

  isScrolled = false;
  menuOpen   = false;

  // Left side — 2 links (mirrors leeway layout: 2 left, 2 right of logo)
  leftLinks: NavLink[] = [
    { label: 'INICIO',      path: '/',          exact: true  },
    { label: 'PORTAFOLIO', path: '/portafolio', exact: false },
    { label: 'CONTACTO', path: '/contacto', exact: false }
  ];

  // Right side — 2 links (desktop hidden; all shown in mobile drawer)
  rightLinks: NavLink[] = [];

  // All links for mobile drawer
  get allLinks(): NavLink[] {
    return [...this.leftLinks, ...this.rightLinks];
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  closeMenu(): void {
    this.menuOpen = false;
    document.body.style.overflow = '';
  }
}