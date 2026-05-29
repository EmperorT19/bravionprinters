import { Component, signal, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Slide {
  url: string;
  alt: string;
  caption: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly slides: Slide[] = [
    {
      url: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1400&q=85&fit=crop',
      alt: 'Premium branding stationery',
      caption: 'Precision in Print'
    },
    {
      url: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1400&q=85&fit=crop',
      alt: 'Bold typography design',
      caption: 'Bold By Design'
    },
    {
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85&fit=crop',
      alt: 'Luxury packaging mockup',
      caption: 'Crafted to Impress'
    }
  ];

  readonly currentIndex = signal(0);
  readonly isTransitioning = signal(false);
  readonly hoveredStripe = signal<number | null>(null);

  // Scroll animations state
  readonly showServices = signal(false);

  private autoplayTimer: ReturnType<typeof setInterval> | null = null;

  get currentSlide() {
    return this.slides[this.currentIndex()];
  }

  ngOnInit() {
    this.startAutoplay();
    
    // Robust scroll detection using IntersectionObserver
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.showServices.set(true);
          } else {
            this.showServices.set(false);
          }
        });
      }, { threshold: 0.1 });
      
      // Delay to ensure view is initialized
      setTimeout(() => {
        const servicesSection = document.getElementById('services-section');
        if (servicesSection) observer.observe(servicesSection);
      }, 100);
    } else {
      // Fallback
      this.showServices.set(true);
    }
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  private startAutoplay() {
    this.autoplayTimer = setInterval(() => this.goToNext(), 4500);
  }

  private stopAutoplay() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
    }
  }

  goToNext() {
    if (this.isTransitioning()) return;
    this.isTransitioning.set(true);
    setTimeout(() => {
      this.currentIndex.set((this.currentIndex() + 1) % this.slides.length);
      this.isTransitioning.set(false);
    }, 400);
  }

  goToPrev() {
    if (this.isTransitioning()) return;
    this.isTransitioning.set(true);
    setTimeout(() => {
      this.currentIndex.set((this.currentIndex() - 1 + this.slides.length) % this.slides.length);
      this.isTransitioning.set(false);
    }, 400);
  }

  goToSlide(index: number) {
    if (this.isTransitioning() || index === this.currentIndex()) return;
    this.stopAutoplay();
    this.isTransitioning.set(true);
    setTimeout(() => {
      this.currentIndex.set(index);
      this.isTransitioning.set(false);
      this.startAutoplay();
    }, 400);
  }

  onCarouselInteract() {
    this.stopAutoplay();
    this.startAutoplay();
  }
}

