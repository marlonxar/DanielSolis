import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

const BASE_URL = 'https://www.daniel-solis.com';

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  init(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) route = route.firstChild;
        return route.snapshot.data as Record<string, string>;
      })
    ).subscribe(data => {
      if (data['description']) {
        this.meta.updateTag({ name: 'description',          content: data['description'] });
        this.meta.updateTag({ property: 'og:description',  content: data['description'] });
        this.meta.updateTag({ name: 'twitter:description', content: data['description'] });
      }

      if (data['ogTitle']) {
        this.meta.updateTag({ property: 'og:title',        content: data['ogTitle'] });
        this.meta.updateTag({ name: 'twitter:title',       content: data['ogTitle'] });
      }

      const canonicalUrl = `${BASE_URL}${this.router.url.split('?')[0]}`;
      this.meta.updateTag({ property: 'og:url', content: canonicalUrl });

      let link = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = this.doc.createElement('link');
        link.setAttribute('rel', 'canonical');
        this.doc.head.appendChild(link);
      }
      link.setAttribute('href', canonicalUrl);
    });
  }
}
