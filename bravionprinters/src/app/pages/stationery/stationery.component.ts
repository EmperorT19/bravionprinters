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
  selector: 'app-stationery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-[#0a0a0a] text-white pt-28 pb-16">
      <!-- Hero Section -->
      <div class="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 relative">
        <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#e10600]/10 rounded-full blur-3xl -z-10"></div>
        <h1 class="text-4xl md:text-6xl font-heading font-extrabold mb-4 uppercase tracking-tight">
          Stationery <span class="text-[#e10600]">Services</span>
        </h1>
        <div class="w-16 h-1 bg-[#e10600] mx-auto mb-6"></div>
        <p class="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium">
          Professional business stationery supply and custom paper print solutions, ensuring your daily office operations remain smooth, branded, and efficient.
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
                <span class="bg-[#e10600] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">Stationery Services</span>
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
                Order Stationery <span>→</span>
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
export class StationeryComponent {
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
      title: 'Custom Receipt & Invoice Books',
      desc: 'Carbonless (NCR) duplicate, triplicate, or quadruplicate receipt books, invoice logs, delivery notes, and cash sale books branded with your logo.',
      detail: 'Our NCR carbonless books are produced on 55gsm–80gsm NCR paper in duplicate (2-part), triplicate (3-part), or quadruplicate (4-part) sets. Each book includes numbered copies for easy tracking. Fully customized with your business logo, address, and layout.',
      tags: ['NCR Carbonless', 'Duplicate', 'Triplicate', 'Receipt Books', 'Invoice Books', 'Custom Numbered'],
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780564902/pexels-gowtham-agm-609630353-19224085_rjilfl.jpg'
    },
    {
      title: 'Company Stamps & Seals',
      desc: 'High-durability self-inking rubber stamps, pocket stamps, date stamps, and official heavy-duty embossed corporate seals.',
      detail: 'We produce high-quality self-inking and pre-inked rubber stamps for daily office use, date stampers, and heavy-duty metal embossed corporate seals for official documents. Stamps are available in standard and custom sizes with quick turnaround times.',
      tags: ['Self-Inking Stamps', 'Date Stamps', 'Embossed Seals', 'Pocket Stamps', 'Custom Layout'],
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780576571/d96da7d214b2af2a297c25310e7b8765_fxrowr.jpg'
    },
    {
      title: 'Custom Envelopes & Letterheads',
      desc: 'Letterheads and envelopes custom-branded in standard sizes (DL, C5, C4). Perfectly aligned to build consistent executive correspondence.',
      detail: 'Branded letterheads and envelopes create a cohesive, professional image for all your business correspondence. We print on premium 90gsm–120gsm bond paper for letterheads and produce envelopes in DL, C5, and C4 sizes with full-color branding or elegant single-color options.',
      tags: ['DL Envelopes', 'C5 Envelopes', 'Letterheads', '90gsm Bond', 'Full-Color Branding', 'Executive Stationery'],
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780564905/pexels-andrei-ciubotariu-434389090-17262454_p8o5rj.jpg'
    },
    {
      title: 'Office Stationery Supplies',
      desc: 'General office stationery packs, custom branded presentation folders, files, writing pads, journals, and executive desk accessories.',
      detail: 'We supply a comprehensive range of branded and unbranded office stationery items including A4 writing pads, spiral notebooks, presentation folders, hardcover journals, and desk organizers. Customization with your company logo and colors is available for bulk orders.',
      tags: ['Writing Pads', 'Branded Folders', 'Notebooks', 'Hardcover Journals', 'Desk Accessories', 'Bulk Orders'],
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780564898/pexels-mart-production-7718835_qpwjcv.jpg'
    },
    {
      title: 'School Exercise Books & Diaries',
      desc: 'Premium school exercise books, class notebooks, diaries, report cards, and customized academic layout papers for educational institutions.',
      detail: 'We partner with schools and academic institutions to supply custom-branded exercise books, record-keeping registers, school diaries, and report card templates. All books are produced with durable covers, quality ruled interiors, and institution-specific branding.',
      tags: ['Exercise Books', 'School Diaries', 'Report Cards', 'Academic Registers', 'Custom Covers', 'Institutional'],
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780564898/pexels-jessikaarraes-14270284_npefjd.jpg'
    },
    {
      title: 'Toners & Consumables',
      desc: 'Genuine laser printer toners, photocopy cartridges, plotting paper rolls, thermal receipts, and other high-grade printing consumables.',
      detail: 'We supply genuine and compatible toner cartridges for all major printer brands including HP, Canon, Epson, Brother, Kyocera, and Ricoh. We also stock plotter paper rolls, thermal paper rolls, and inkjet cartridges for offices of all sizes, with competitive pricing on bulk orders.',
      tags: ['HP Toners', 'Canon Toners', 'Epson Ink', 'Plotter Paper', 'Thermal Rolls', 'Bulk Supply'],
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780564899/pexels-jakubzerdzicki-23534017_fyh2th.jpg'
    }
  ];
}
