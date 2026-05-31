import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit, OnDestroy {

  countdown = 10;
  private timer: ReturnType<typeof setInterval> | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.goHome();
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  goHome(): void {
    if (this.timer) clearInterval(this.timer);
    this.router.navigate(['/']);
  }

  goBack(): void {
    if (this.timer) clearInterval(this.timer);
    window.history.back();
  }
}