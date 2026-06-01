import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Slide {
  url: string;
  alt: string;
  caption: string;
}

interface ServiceCard {
  icon: string;
  title: string;
  desc: string;
  link: string;
  image: string;
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

  readonly services: ServiceCard[] = [
    {
      icon: 'M9 17.5H3.5a2.5 2.5 0 01-2.5-2.5V9a2.5 2.5 0 012.5-2.5h17A2.5 2.5 0 0123 9v6a2.5 2.5 0 01-2.5 2.5H15',
      title: 'Vehicle Branding',
      desc: 'Full vehicle wraps, partial wraps, and fleet branding for cars, matatus, buses, and trucks.',
      link: '/vehicle-branding',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop'
    },
    {
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      title: 'Signage & Shop Branding',
      desc: '3D signs, LED signs, reception signs, billboard and outdoor signage solutions.',
      link: '/signage-branding',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&q=80&fit=crop'
    },
    {
      icon: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z',
      title: 'Corporate Apparel & Gifts',
      desc: 'Branded t-shirts, caps, hoodies, mugs, diaries, calendars, and promotional merchandise.',
      link: '/corporate-branding',
      image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80&fit=crop'
    },
    {
      icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10',
      title: 'Office & Glass Branding',
      desc: 'Frosted stickers, wall wraps, glass branding, office signage, and reception branding.',
      link: '/office-branding',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&fit=crop'
    },
    {
      icon: 'M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z',
      title: 'Events & Promotional',
      desc: 'Roll-up banners, tear drops, backdrops, branded tents, gazebos, and event setups.',
      link: '/event-branding',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80&fit=crop'
    },
    {
      icon: 'M12 19l7-7 3 3-7 7-3-3z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z M2 2l7.586 7.586',
      title: 'Digital Design',
      desc: 'Social media posters, ad creatives, thumbnails, digital campaigns, and graphic design.',
      link: '/digital-design',
      image: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=600&q=80&fit=crop'
    },
    {
      icon: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8',
      title: 'Printing & Stationery',
      desc: 'Business cards, flyers, brochures, company profiles, annual reports, and bulk printing.',
      link: '/printing-stationery',
      image: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?w=600&q=80&fit=crop'
    }
  ];

  readonly testimonials = [
    { name: 'James M.', company: 'AutoFleet Kenya', text: 'Bravion transformed our entire fleet branding. The quality of the vehicle wraps is outstanding and has lasted over two years without fading.' },
    { name: 'Grace W.', company: 'Bloom Events', text: 'We trust Bravion for all our event branding needs. From banners to full event setups, they deliver quality on time, every time.' },
    { name: 'Peter K.', company: 'TechHub Nairobi', text: 'The office branding they did for us is world-class. Frosted glass, wall wraps, reception signage – everything was perfect.' }
  ];

  readonly stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '200+', label: 'Happy Clients' },
    { value: '3+', label: 'Years Experience' },
    { value: '7', label: 'Service Categories' }
  ];

  readonly whyChooseUs = [
    { icon: '⚡', title: 'Quick Turnaround', desc: 'Fast delivery without compromising on quality.' },
    { icon: '🏆', title: 'Professional Quality', desc: 'Premium materials and expert craftsmanship.' },
    { icon: '💰', title: 'Affordable Pricing', desc: 'Competitive rates for every budget.' },
    { icon: '🎨', title: 'Creative Designs', desc: 'Fresh, bold ideas that make brands stand out.' },
    { icon: '⚙️', title: 'Modern Equipment', desc: 'State-of-the-art printing and production tech.' },
    { icon: '🤝', title: 'Trusted Partner', desc: 'Long-term branding partner you can rely on.' }
  ];

  readonly currentIndex = signal(0);
  readonly isTransitioning = signal(false);
  readonly hoveredStripe = signal<number | null>(null);
  readonly showServices = signal(false);
  readonly showPortfolio = signal(false);
  readonly showWhy = signal(false);
  readonly activeTestimonial = signal(0);
  readonly activeFilter = signal('all');

  private autoplayTimer: any = null;
  private testimonialTimer: any = null;

  get currentSlide() {
    return this.slides[this.currentIndex()];
  }

  ngOnInit() {
    this.startAutoplay();
    this.startTestimonialAutoplay();
    this.setupIntersectionObservers();
  }

  ngOnDestroy() {
    this.stopAutoplay();
    if (this.testimonialTimer) clearInterval(this.testimonialTimer);
  }

  private setupIntersectionObservers() {
    if (typeof IntersectionObserver === 'undefined') {
      this.showServices.set(true);
      this.showPortfolio.set(true);
      this.showWhy.set(true);
      return;
    }

    setTimeout(() => {
      this.observeSection('services-section', this.showServices);
      this.observeSection('portfolio-section', this.showPortfolio);
      this.observeSection('why-section', this.showWhy);
    }, 150);
  }

  private observeSection(id: string, signal: any) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          signal.set(true);
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });

    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        signal.set(true);
      } else {
        observer.observe(el);
      }
    } else {
      signal.set(true);
    }
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

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
