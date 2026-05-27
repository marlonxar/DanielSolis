import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { RouterModule } from '@angular/router';

interface Ray {
  x: number;
  y: number;
  length: number;
  angle: number;
  opacity: number;
  width: number;
  color: string;
  phase: number;
  curve: number;
  speed: number;
}

@Component({
  selector: 'app-hero',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('heroVideo') videoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('raysCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  linesVisible = false;

  private animId = 0;
  private ctx!: CanvasRenderingContext2D;
  private rays: Ray[] = [];
  private time = 0;
  private resizeHandler!: () => void;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Trigger entrance animation after a short delay
    setTimeout(() => (this.linesVisible = true), 120);

    this.initVideo();
    this.initCanvas();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animId);
    window.removeEventListener('resize', this.resizeHandler);
    document.body.style.overflow = '';
  }

  // ── Video ──────────────────────────────────────────────────
  private initVideo(): void {
    const video = this.videoRef?.nativeElement;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {
      // Autoplay blocked — canvas handles the background
    });
  }

  // ── Canvas rays ────────────────────────────────────────────
  private initCanvas(): void {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    this.ctx = ctx;

    this.fitCanvas(canvas);
    this.rays = this.buildRays(canvas.width, canvas.height);

    const tick = () => {
      this.draw(canvas);
      this.time += 0.004;
      this.animId = requestAnimationFrame(tick);
    };
    tick();

    this.resizeHandler = () => {
      this.fitCanvas(canvas);
      this.rays = this.buildRays(canvas.width, canvas.height);
    };
    window.addEventListener('resize', this.resizeHandler);
  }

  private fitCanvas(canvas: HTMLCanvasElement): void {
    canvas.width  = canvas.offsetWidth  || window.innerWidth;
    canvas.height = canvas.offsetHeight || window.innerHeight;
  }

  private buildRays(w: number, h: number): Ray[] {
    const palette = ['#D4A017', '#C8920E', '#E8BC34', '#F0D060', '#B8800A'];
    return Array.from({ length: 18 }, () => ({
      x:       Math.random() * w,
      y:       Math.random() * h,
      length:  250 + Math.random() * 550,
      angle:   Math.random() * Math.PI * 2,
      opacity: 0.03 + Math.random() * 0.14,
      width:   1.5 + Math.random() * 3.5,
      color:   palette[Math.floor(Math.random() * palette.length)],
      phase:   Math.random() * Math.PI * 2,
      curve:   (Math.random() - 0.5) * 0.9,
      speed:   0.0003 + Math.random() * 0.0006,
    }));
  }

  private draw(canvas: HTMLCanvasElement): void {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Bottom-right ambient glow (matches PDF brand)
    const gBR = ctx.createRadialGradient(
      canvas.width * 0.85, canvas.height * 0.88, 0,
      canvas.width * 0.85, canvas.height * 0.88, canvas.height * 0.85
    );
    gBR.addColorStop(0,   'rgba(212,160,23,0.16)');
    gBR.addColorStop(0.5, 'rgba(180,120,10,0.05)');
    gBR.addColorStop(1,   'rgba(0,0,0,0)');
    ctx.fillStyle = gBR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Top-right glow
    const gTR = ctx.createRadialGradient(
      canvas.width * 0.88, canvas.height * 0.08, 0,
      canvas.width * 0.88, canvas.height * 0.08, canvas.height * 0.5
    );
    gTR.addColorStop(0, 'rgba(240,190,50,0.12)');
    gTR.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gTR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw rays
    this.rays.forEach((ray) => {
      const pulse = ray.opacity * (0.65 + 0.35 * Math.sin(this.time * 1.8 + ray.phase));
      const angle = ray.angle + Math.sin(this.time * ray.speed * 280 + ray.phase) * 0.22;

      const x1 = ray.x + Math.cos(angle) * ray.length * 0.5;
      const y1 = ray.y + Math.sin(angle) * ray.length * 0.5;
      const x2 = ray.x - Math.cos(angle) * ray.length * 0.5;
      const y2 = ray.y - Math.sin(angle) * ray.length * 0.5;
      const mx = (x1 + x2) / 2 + Math.cos(angle + Math.PI / 2) * ray.curve * 160;
      const my = (y1 + y2) / 2 + Math.sin(angle + Math.PI / 2) * ray.curve * 160;

      const g = ctx.createLinearGradient(x1, y1, x2, y2);
      const rgba = this.toRgba(ray.color, pulse);
      g.addColorStop(0,   'rgba(0,0,0,0)');
      g.addColorStop(0.2, this.toRgba(ray.color, pulse * 0.5));
      g.addColorStop(0.5, rgba);
      g.addColorStop(0.8, this.toRgba(ray.color, pulse * 0.5));
      g.addColorStop(1,   'rgba(0,0,0,0)');

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.quadraticCurveTo(mx, my, x2, y2);
      ctx.strokeStyle = g;
      ctx.lineWidth   = ray.width * (0.85 + 0.15 * Math.sin(this.time + ray.phase));
      ctx.lineCap     = 'round';
      ctx.stroke();

      // Drift
      ray.x += Math.cos(angle + Math.PI / 2) * 0.1;
      ray.y += Math.sin(angle + Math.PI / 2) * 0.1;

      if (ray.x < -ray.length) ray.x = canvas.width  + ray.length;
      if (ray.x > canvas.width  + ray.length) ray.x = -ray.length;
      if (ray.y < -ray.length) ray.y = canvas.height + ray.length;
      if (ray.y > canvas.height + ray.length) ray.y = -ray.length;
    });
  }

  private toRgba(hex: string, a: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${a})`;
  }
}