import { Component, OnInit } from '@angular/core';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'danielsolis-fe';

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.init();
  }
}
