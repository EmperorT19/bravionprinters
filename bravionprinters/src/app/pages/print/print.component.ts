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
  selector: 'app-print',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-[#0a0a0a] text-white pt-28 pb-16">
      <!-- Hero Section -->
      <div class="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 relative">
        <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#e10600]/10 rounded-full blur-3xl -z-10"></div>
        <h1 class="text-4xl md:text-6xl font-heading font-extrabold mb-4 uppercase tracking-tight">
          Print <span class="text-[#e10600]">Services</span>
        </h1>
        <div class="w-16 h-1 bg-[#e10600] mx-auto mb-6"></div>
        <p class="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium">
          High-precision commercial printing services utilizing state-of-the-art technology to deliver crisp, vibrant, and professional publications.
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
                <span class="bg-[#e10600] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">Print Services</span>
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
                Inquire Now <span>→</span>
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
export class PrintComponent {
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
      title: 'Company Profiles & Catalogues',
      desc: 'Sleek, corporate-standard profile books, directories, product catalogs, and pamphlets. Establish solid business credentials with outstanding print quality.',
      detail: 'We produce professionally bound company profiles that serve as a powerful sales tool. From cover design to interior layouts, every page is crafted to communicate your brand story with authority. Available in saddle-stitched, perfect-bound, or spiral-bound finishes.',
      tags: ['Company Profiles', 'Product Catalogs', 'Pamphlets', 'Perfect Binding', 'Saddle-Stitch'],
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780564906/pexels-alleksana-4271624_agpyln.jpg'
    },
    {
      title: 'Annual & Strategic Reports',
      desc: 'Professional document print production for corporate annual reports, strategic plans, audit results, and tender proposal packages with durable binding.',
      detail: 'Our annual report printing service combines premium paper stock, accurate color reproduction, and durable binding to produce documents that reflect the professionalism of your organization. We handle everything from pre-press preparation to final delivery.',
      tags: ['Annual Reports', 'Strategic Plans', 'Tender Documents', 'Audit Reports', 'Hard Binding'],
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780564899/pexels-mart-production-7605981_czeiyj.jpg'
    },
    {
      title: 'Brochures, Flyers & Leaflets',
      desc: 'Vibrant, sharp commercial brochures and single-sheet marketing flyers. Available in single, bi-fold, or tri-fold styles with premium texturized coatings.',
      detail: 'From A4 single-sided flyers to multi-fold brochures, we print on premium art paper with gloss or matte laminate finishes. Perfect for product launches, events, or ongoing marketing campaigns. Minimum order quantities apply for bulk pricing.',
      tags: ['Tri-fold', 'Bi-fold', 'A5 Flyers', 'Art Paper', 'Gloss Laminate', 'Matte Finish'],
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780564906/pexels-casnafu-36823601_yjheqq.jpg'
    },
    {
      title: 'Premium Business Cards',
      desc: 'Custom-designed executive business cards printed on thick cardstocks with options for soft-touch matte lamination, spot UV, or luxury gold foil stamping.',
      detail: 'Make a lasting first impression with business cards that stand out. Choose from 350gsm–600gsm cardstocks with finishes including soft-touch matte, gloss UV, foil stamping in gold or silver, embossing, or die-cut custom shapes.',
      tags: ['350gsm–600gsm', 'Soft-Touch Matte', 'Gold Foil', 'Spot UV', 'Embossing', 'Die-Cut'],
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780564907/pexels-ai25studioai-6620968_vo3jks.jpg'
    },
    {
      title: 'Offset & Bulk Printing',
      desc: 'Cost-efficient bulk commercial printing using state-of-the-art offset lithography machines. Perfect for high-volume flyers, newsletters, and manuals.',
      detail: 'For large print runs of 500+ copies, offset printing delivers unmatched color consistency and cost-per-unit savings. Ideal for mass-market flyers, product manuals, event programs, and promotional inserts. CMYK and Pantone color matching available.',
      tags: ['Offset Litho', 'CMYK', 'Pantone', 'High-Volume', '500+ Copies', 'Cost Efficient'],
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780564904/pexels-criiv-9550363_yiiu3j.jpg'
    },
    {
      title: 'Large Format Printing',
      desc: 'High-impact indoor and outdoor branding solutions. From pull-up banners and vinyl stickers to massive billboards, window graphics, and event backdrops.',
      detail: 'Command attention with vibrant, weather-resistant large format prints. We utilize advanced eco-solvent and UV-curable ink technologies to print on tear-resistant PVC banners, self-adhesive vinyl, architectural canvas, and rigid boards. Perfect for storefront branding, trade shows, and high-visibility outdoor advertising.',
      tags: ['Roll-up Banners', 'Vinyl Stickers', 'PVC Banners', 'Billboards', 'Branding', 'Eco-Solvent'],
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780652724/geri-sakti-CYrYxz-uvE4-unsplash_ozvtnr.jpg' 
    },
    {
      title: 'Books & Publication Printing',
      desc: 'Complete printing services for academic books, magazines, manuals, novels, and catalogs. Includes typesetting assistance, softcover/hardcover binding, and laminating.',
      detail: 'Whether you are self-publishing a novel, producing an academic textbook, or creating a corporate training manual, we offer end-to-end print publishing services including typesetting, proofing, full-color printing, and durable binding in softcover or hardcover formats.',
      tags: ['Book Publishing', 'Softcover', 'Hardcover', 'Typesetting', 'Magazines', 'Manuals'],
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780566147/pexels-wutthichai-charoenburi-553075115-19843566_mbpfto.jpg'
    }
  ];
}
