import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private meta: Meta
  ) {}

  init(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) route = route.firstChild;
        return route.snapshot.data['description'] as string | undefined;
      }),
      filter(Boolean)
    ).subscribe(description => {
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:description', content: description });
      this.meta.updateTag({ name: 'twitter:description', content: description });
    });
  }
}
