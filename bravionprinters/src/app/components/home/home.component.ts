import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { ClientsComponent } from '../clients/clients.component';

interface Slide {
  url: string;
  alt: string;
  caption: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, AboutComponent, ServicesComponent, ClientsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly slides: Slide[] = [
    {
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85&fit=crop',
      alt: 'Vehicle branding showcase',
      caption: 'Vehicle Branding'
    },
    {
      url: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1400&q=85&fit=crop',
      alt: 'Signage and shop branding',
      caption: 'Signage & Shop Branding'
    },
    {
      url: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1400&q=85&fit=crop',
      alt: 'Corporate branding materials',
      caption: 'Corporate Branding'
    },
    {
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&q=85&fit=crop',
      alt: 'Event branding setup',
      caption: 'Event Branding'
    },
    {
      url: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?w=1400&q=85&fit=crop',
      alt: 'Printing services',
      caption: 'Printing & Stationery'
    }
  ];

  readonly testimonials = [
    { name: 'James M.', company: 'AutoFleet Kenya', text: 'Bravion transformed our entire fleet branding. The quality of the vehicle wraps is outstanding and has lasted over two years without fading.' },
    { name: 'Grace W.', company: 'Bloom Events', text: 'We trust Bravion for all our event branding needs. From banners to full event setups, they deliver quality on time, every time.' },
    { name: 'Peter K.', company: 'TechHub Nairobi', text: 'The office branding they did for us is world-class. Frosted glass, wall wraps, reception signage – everything was perfect.' }
  ];

  readonly currentIndex = signal(0);
  readonly isTransitioning = signal(false);
  readonly hoveredStripe = signal<number | null>(null);
  readonly activeTestimonial = signal(0);

  private autoplayTimer: any = null;
  private testimonialTimer: any = null;

  get currentSlide() {
    return this.slides[this.currentIndex()];
  }

  ngOnInit() {
    this.startAutoplay();
    this.startTestimonialAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
    if (this.testimonialTimer) clearInterval(this.testimonialTimer);
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

  private startTestimonialAutoplay() {
    this.testimonialTimer = setInterval(() => {
      this.activeTestimonial.set((this.activeTestimonial() + 1) % this.testimonials.length);
    }, 5000);
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
