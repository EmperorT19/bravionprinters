import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface SubService {
  title: string;
  desc: string;
  detail: string;
  tags: string[];
  image: string;
}

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-[#0a0a0a] text-white pt-28 pb-16">
      <!-- Hero Section -->
      <div class="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 relative">
        <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#e10600]/10 rounded-full blur-3xl -z-10"></div>
        <h1 class="text-4xl md:text-6xl font-heading font-extrabold mb-4 uppercase tracking-tight">
          Brand <span class="text-[#e10600]">Services</span>
        </h1>
        <div class="w-16 h-1 bg-[#e10600] mx-auto mb-6"></div>
        <p class="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium">
          Premium physical and environmental branding solutions designed to give your company maximum visibility, trust, and authority in the market.
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (sub of subServices; track sub.title) {
            <div
              class="bg-neutral-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden flex flex-col group hover:border-[#e10600]/40 shadow-lg hover:shadow-[0_20px_50px_rgba(225,6,0,0.12)] transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              (click)="openModal(sub)"
              role="button"
              [attr.aria-label]="'View details for ' + sub.title"
              tabindex="0"
              (keydown.enter)="openModal(sub)"
              (keydown.space)="$event.preventDefault(); openModal(sub)">
              <div class="h-52 w-full overflow-hidden relative">
                <img [src]="sub.image" [alt]="sub.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
              </div>
              <div class="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 class="text-white font-heading font-bold text-xl mb-3 tracking-wide group-hover:text-[#e10600] transition-colors">
                    {{ sub.title }}
                  </h3>
                  <p class="text-neutral-400 text-sm leading-relaxed mb-6">
                    {{ sub.desc }}
                  </p>
                </div>
                <div class="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold tracking-wider text-neutral-400 uppercase">
                  <span class="group-hover:text-white transition-colors">Read More</span>
                  <span class="text-[#e10600] group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>

    <!-- Service Detail Modal -->
    @if (activeService) {
      <div
        class="modal-backdrop fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8"
        (click)="closeModal()"
        role="dialog"
        [attr.aria-label]="activeService.title + ' details'"
        aria-modal="true">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

        <!-- Modal Panel -->
        <div
          class="modal-panel relative bg-[#111] border border-white/10 rounded-2xl overflow-hidden w-full max-w-2xl shadow-2xl shadow-black/60"
          (click)="$event.stopPropagation()">

          <!-- Close Button -->
          <button
            (click)="closeModal()"
            class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-[#e10600] border border-white/10 flex items-center justify-center text-white transition-all duration-200"
            aria-label="Close modal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          <!-- Scrollable Content -->
          <div class="max-h-[85vh] overflow-y-auto">
            <!-- Hero Image -->
            <div class="w-full relative bg-[#0a0a0a]">
              <img [src]="activeService.image" [alt]="activeService.title" class="w-full h-auto object-contain max-h-[60vh]" />
              <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111] to-transparent"></div>
              <div class="absolute top-4 left-4">
                <span class="bg-[#e10600] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">Brand Services</span>
              </div>
            </div>

            <!-- Text Content -->
            <div class="p-6 md:p-10">
              <h2 class="text-2xl md:text-3xl font-heading font-extrabold text-white mb-4 leading-tight">
                {{ activeService.title }}
              </h2>
              <div class="w-10 h-0.5 bg-[#e10600] mb-6"></div>
              <p class="text-neutral-300 text-base leading-relaxed mb-4">
                {{ activeService.desc }}
              </p>
              <p class="text-neutral-500 text-sm leading-relaxed mb-8">
                {{ activeService.detail }}
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-8">
                @for (tag of activeService.tags; track tag) {
                  <span class="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-white/10 text-neutral-400 bg-white/5">{{ tag }}</span>
                }
              </div>

              <!-- CTA -->
              <a routerLink="/contact" (click)="closeModal()"
                class="inline-flex items-center gap-3 bg-[#e10600] hover:bg-[#c00500] text-white font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-300 hover:shadow-[0_12px_30px_rgba(225,6,0,0.4)] hover:-translate-y-1">
                Start Branding <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    @keyframes modalIn {
      from { opacity: 0; transform: scale(0.94) translateY(24px); }
      to   { opacity: 1; transform: scale(1) translateY(0); }
    }
    .modal-panel { animation: modalIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both; }
    @keyframes backdropIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    .modal-backdrop { animation: backdropIn 0.2s ease both; }
  `]
})
export class BrandComponent {
  activeService: SubService | null = null;

  openModal(service: SubService) {
    this.activeService = service;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.activeService = null;
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape() { this.closeModal(); }

  readonly subServices: SubService[] = [
    {
      title: 'Vehicle Branding',
      desc: 'Turn personal cars, corporate fleets, matatus, school buses, delivery vans, and trucks into high-impact moving billboards with full or half wraps.',
      detail: 'We use premium cast vinyl wraps and precision cutting technology to transform your vehicles into mobile advertising units that generate thousands of brand impressions daily. Our vehicle wraps are UV-resistant, waterproof, and designed to last 5–7 years in harsh conditions.',
      tags: ['Full Vehicle Wrap', 'Half Wrap', 'Fleet Branding', 'Cast Vinyl', 'UV-Resistant', 'Matatus'],
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780580690/d48970ef3647b9ebdbbd610f268114cb_cvx4tx.png'
    },
    {
      title: 'Signage & Shop Branding',
      desc: 'Eye-catching 3D acrylic signs, LED & neon signs, reception displays, billboard graphics, light boxes, and complete shop front fabrication.',
      detail: 'From illuminated shop fascia signs to towering pylon structures, we design, fabricate, and install signage solutions that ensure your business stands out 24/7. We work with aluminum composite, acrylic, stainless steel, and LED modules for maximum durability.',
      tags: ['3D Acrylic Signs', 'LED Signage', 'Neon Signs', 'Light Boxes', 'Shop Fronts', 'Pylons'],
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780564901/pexels-gowtham-agm-609630353-19576867_ejybjn.jpg'
    },
    {
      title: 'Branded Apparel & Uniforms',
      desc: 'High-quality custom branded t-shirts, polo shirts, hoodies, caps, safety reflectors, and corporate or institutional uniforms.',
      detail: 'We source premium garments from trusted suppliers and apply your branding through embroidery, screen printing, heat transfer, or sublimation. Bulk order discounts available. We handle everything from design mockup to final delivery for corporate, institutional, and event wear.',
      tags: ['Embroidery', 'Screen Print', 'Sublimation', 'Polo Shirts', 'T-Shirts', 'Safety Gear'],
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780564905/pexels-alexeydemidov-9314012_diaieu.jpg'
    },
    {
      title: 'Corporate Gifts & Merchandise',
      desc: 'Branded executive diaries, calendars, mugs, pens, water bottles, and gift hampers designed to establish lasting brand affinity.',
      detail: 'Strengthen client relationships and employee loyalty with thoughtfully curated branded merchandise. We source, brand, and package corporate gifts for holidays, product launches, staff recognition, and executive meetings. Custom packaging and personalization available.',
      tags: ['Executive Gifts', 'Branded Mugs', 'Corporate Diaries', 'Calendars', 'Gift Hampers', 'Custom Packaging'],
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780640234/COPORATE_BRANDING_ofiwuv.png'
    },
    {
      title: 'Office & Glass Branding',
      desc: 'Transform your workspaces with frosted glass privacy stickers, customized wall wraps, partition decals, and office directional signs.',
      detail: 'Create a branded, professional environment that impresses clients and motivates staff. We install frosted, etched, and one-way vision window films, wall murals, floor graphics, door decals, and directional wayfinding signage tailored to your corporate identity.',
      tags: ['Frosted Glass', 'Wall Murals', 'Floor Graphics', 'Wayfinding', 'Office Decals', 'Window Films'],
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780640232/OFFICE_BRANDING4_z6vpjw.png'
    },
    {
      title: 'Events & Promotional Branding',
      desc: 'Comprehensive solutions for exhibitions and roadshows, featuring roll-up banners, teardrops, backdrops, custom gazebos, and branded tents.',
      detail: 'Make every event an unforgettable brand activation. We supply and install complete event branding setups including pull-up banners, step-and-repeat backdrops, pop-up canopies, branded gazebos, event flags, and teardrop banners for exhibitions, conferences, and outdoor activations.',
      tags: ['Roll-Up Banners', 'Teardrops', 'Backdrops', 'Event Gazebos', 'Exhibitions', 'Outdoor Activation'],
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780565748/pexels-sleeba-thomas-156395977-30283892_uczkbc.jpg'
    },
    {
      title: 'Institutional & Resort Branding',
      desc: 'Tailored branding designs for hotels, lodges, churches, and academic institutions, ensuring robust visibility and alignment.',
      detail: 'We partner with schools, universities, hotels, resorts, and churches to deliver cohesive environmental branding that reflects their values and identity. From entrance signage and room numbering to branded uniforms and promotional materials, we handle it all.',
      tags: ['Schools', 'Universities', 'Hotels', 'Lodges', 'Churches', 'Environmental Branding'],
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780564906/pexels-akari-rei-2150142406-33927819_a2to7z.jpg'
    }
  ];
}
