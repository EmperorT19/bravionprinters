import { Component, Input, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./services.component.css'],
  styles: [`
    .svc-cta-btn:hover {
      background-color: #e10600 !important;
      color: #fff !important;
    }
    .svc-cta-btn.bg-red:hover {
      background-color: #fff !important;
      color: #e10600 !important;
    }
  `],
  template: `
    <div [ngClass]="isHomeSection ? '' : 'pt-24 min-h-screen bg-[#0a0a0a]'">
      <!-- Standalone Page Header -->
      <div *ngIf="!isHomeSection" class="max-w-7xl mx-auto px-8 md:px-16 mb-4">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-heading font-bold mb-4 text-white">OUR <span class="text-[#e10600]">SERVICES</span></h1>
          <div class="w-16 h-1 bg-[#e10600] mx-auto mb-6"></div>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg font-medium">Complete, high-quality branding and printing solutions.</p>
        </div>
      </div>

      <!-- PREMIUM SERVICES SECTION -->
      <section id="services-section" class="services-section-premium relative px-8 md:px-16 overflow-hidden text-white bg-[#0a0a0a]" [ngClass]="isHomeSection ? 'py-32' : 'py-16'">
        <!-- Subtle dot-grid background -->
        <div class="svc-bg-grid"></div>
        <!-- Soft radial glow anchors -->
        <div class="svc-glow svc-glow-left"></div>
        <div class="svc-glow svc-glow-right"></div>

        <div class="relative max-w-7xl mx-auto z-10">
          <!-- ── Section header ── -->
          <div class="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <!-- Sub-label -->
              <span class="text-[#e10600] text-sm font-bold tracking-[0.2em] uppercase mb-2 block">WHAT WE DO</span>
              <!-- Main heading -->
              <h2 class="text-4xl md:text-5xl font-heading font-extrabold leading-tight text-white">
                OUR <span class="text-[#e10600]">CORE</span><br>SERVICES
              </h2>
              <!-- Red accent bar -->
              <div class="flex items-center gap-3 mt-6">
                <div class="w-12 h-1 bg-[#e10600]"></div>
                <div class="w-4 h-1 bg-[#e10600]/40"></div>
                <div class="w-2 h-1 bg-[#e10600]/20"></div>
              </div>
            </div>
            <p class="text-gray-400 max-w-sm text-sm leading-relaxed md:text-right">
              Comprehensive branding solutions tailored for businesses that refuse to compromise on quality.
            </p>
          </div>

          <!-- ── Service cards grid (2 cols on md+) ── -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            @for (service of services; track service.title; let i = $index) {
              <a [routerLink]="service.link"
                 class="svc-card group"
                 [class.svc-anim]="true"
                 [class.svc-visible]="showServices()"
                 [style.transition-delay]="(i * 150) + 'ms'">

                <!-- Image panel -->
                <div class="svc-card-img-wrap relative h-56 md:h-64 overflow-hidden rounded-t-xl">
                  <img [src]="service.image" [alt]="service.title"
                       class="svc-card-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <!-- Dark scrim -->
                  <div class="svc-card-scrim absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent opacity-80"></div>
                  <!-- Icon badge -->
                  <div class="svc-card-icon-badge absolute top-6 right-6 w-12 h-12 bg-[#0a0a0a]/80 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 text-white group-hover:bg-[#e10600] group-hover:border-[#e10600] transition-colors duration-300 shadow-lg">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                      <path [attr.d]="service.icon"/>
                    </svg>
                  </div>
                  <!-- Number tag -->
                  <div class="absolute bottom-6 left-6">
                    <span class="text-white/30 font-heading font-black text-5xl tracking-tighter transition-colors duration-300 group-hover:text-white/50">0{{ i + 1 }}</span>
                  </div>
                </div>

                <!-- Text content -->
                <div class="svc-card-body relative bg-[#111] p-8 md:p-10 rounded-b-xl border border-white/5 border-t-0 transition-colors duration-300 group-hover:bg-[#151515]">
                  <div class="flex items-start justify-between gap-4 mb-4">
                    <h3 class="svc-card-title text-2xl font-heading font-bold text-white group-hover:text-[#e10600] transition-colors duration-300">{{ service.title }}</h3>
                    <!-- Arrow circle -->
                    <div class="svc-card-arrow-circle w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:border-[#e10600] group-hover:text-[#e10600] group-hover:bg-[#e10600]/10 transition-all duration-300 transform group-hover:translate-x-1 shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </div>
                  </div>
                  <p class="svc-card-desc text-gray-400 text-sm leading-relaxed mb-0">{{ service.desc }}</p>
                  
                  <!-- Bottom accent bar (grows on hover) -->
                  <div class="svc-card-bar absolute bottom-0 left-0 h-1 w-0 bg-[#e10600] transition-all duration-500 group-hover:w-full rounded-b-xl"></div>
                </div>

                <!-- Full-card hover glow/shadow overlay -->
                <div class="svc-card-glow absolute inset-0 rounded-xl ring-1 ring-inset ring-white/0 group-hover:ring-[#e10600]/30 group-hover:shadow-[0_10px_40px_-10px_rgba(225,6,0,0.15)] transition-all duration-500 pointer-events-none"></div>
              </a>
            }
          </div>

          <!-- ── CTA ── -->
          <div *ngIf="isHomeSection" class="flex flex-col sm:flex-row items-center justify-between mt-20 gap-6 pt-10 border-t border-white/10">
            <p class="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase text-center sm:text-left">
              Need something specific? We'll build it for you.
            </p>
            <div class="flex items-center gap-4">
              <a routerLink="/services" class="svc-cta-btn inline-flex items-center gap-2 text-xs font-bold tracking-widest text-white bg-transparent border-2 border-[#e10600] px-8 py-4 rounded-sm hover:bg-[#e10600] hover:text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(225,6,0,0.4)]">
                VIEW ALL SERVICES <span>→</span>
              </a>
              <a routerLink="/contact" class="svc-cta-btn inline-flex items-center gap-2 text-xs font-bold tracking-widest text-white bg-[#e10600] border-2 border-[#e10600] px-8 py-4 rounded-sm hover:bg-white hover:text-[#e10600] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(225,6,0,0.4)]">
                GET A QUOTE
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class ServicesComponent implements OnInit {
  @Input() isHomeSection: boolean = false;
  readonly showServices = signal(false);

  readonly services = [
    {
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      title: 'Design Services',
      desc: 'Creative digital design, social media posters, ad creatives, animated designs, and corporate brand layout graphics.',
      link: '/design',
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780564899/pexels-karola-g2-6444_q8rirw.jpg'
    },
    {
      icon: 'M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v8H6v-8z',
      title: 'Print Services',
      desc: 'Premium commercial printing, company profiles, annual reports, brochures, flyers, and offset bulk prints.',
      link: '/print',
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780566986/pexels-mathilde-10897656_qody2g.jpg'
    },
    {
      icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2',
      title: 'Brand Services',
      desc: 'High-impact vehicle wraps, custom corporate apparel, gifts, shop signage, event banners, and office branding.',
      link: '/brand',
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780564904/pexels-eva-bronzini-7661410_zniw1s.jpg'
    },
    {
      icon: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8',
      title: 'Stationery Services',
      desc: 'Branded carbonless receipt and invoice books, customized envelopes, company stamps, and office stationery supplies.',
      link: '/stationery',
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780564900/pexels-mart-production-7718794_xnydq5.jpg'
    }
  ];

  ngOnInit() {
    setTimeout(() => {
      this.observeSection('services-section', this.showServices);
    }, 150);
  }

  private observeSection(id: string, signal: any) {
    if (typeof document === 'undefined') return;
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        signal.set(true);
      } else {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              signal.set(true);
              observer.disconnect();
            }
          });
        }, { threshold: 0.1 });
        observer.observe(el);
      }
    }
  }
}

