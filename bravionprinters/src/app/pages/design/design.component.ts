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
  selector: 'app-design',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-[#0a0a0a] text-white pt-28 pb-16">
      <!-- Hero Section -->
      <div class="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 relative">
        <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#e10600]/10 rounded-full blur-3xl -z-10"></div>
        <h1 class="text-4xl md:text-6xl font-heading font-extrabold mb-4 uppercase tracking-tight">
          Design <span class="text-[#e10600]">Services</span>
        </h1>
        <div class="w-16 h-1 bg-[#e10600] mx-auto mb-6"></div>
        <p class="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium">
          Creative digital solutions and graphic designs crafted to enhance your brand presence, attract new clients, and drive meaningful engagement online.
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
                <span class="bg-[#e10600] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">Design Services</span>
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
                Start a Project <span>→</span>
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
export class DesignComponent {
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
      title: 'Social Media Graphics',
      desc: 'Engaging, brand-aligned graphics for Instagram, Facebook, LinkedIn, and Twitter. We create visuals that capture attention and drive audience interaction.',
      detail: 'From static carousel posts to animated story frames, our team delivers scroll-stopping social media content that reflects your brand identity. Each graphic is optimized for each platform\'s specifications and tailored to your target demographic.',
      tags: ['Instagram', 'Facebook', 'LinkedIn', 'Twitter', 'Carousel Posts', 'Story Frames'],
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80&fit=crop'
    },
    {
      title: 'Digital Promotional Ads',
      desc: 'High-conversion banner ads, display creatives, and promotional graphics optimized for online marketing campaigns. Designed to maximize your campaign ROI.',
      detail: 'We craft compelling digital ad creatives for Google Display Network, Facebook Ads Manager, Instagram Ads, and programmatic platforms. Every ad is A/B-ready, built to maximize click-through rates and drive measurable conversions.',
      tags: ['Google Ads', 'Facebook Ads', 'Display Banners', 'Retargeting', 'Conversion-Optimized'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop'
    },
    {
      title: 'Video & Article Thumbnails',
      desc: 'Captivating, high-impact custom thumbnails designed to maximize click-through rates. Make your YouTube videos, blogs, and articles stand out from the crowd.',
      detail: 'Our thumbnail design leverages proven visual psychology principles — bold contrasting colors, strategic text placement, and eye-catching focal points — to ensure your content gets noticed and clicked in crowded feeds.',
      tags: ['YouTube', 'Blog Posts', 'Articles', 'CTR Optimization', 'Visual Psychology'],
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780567975/kyle-loftus-6eREmQ0VY-k-unsplash_ufxahs.jpg'
    },
    {
      title: 'Corporate Digital Layouts',
      desc: 'Professional pitch decks, corporate presentation templates, and digital documents. Align your corporate communications with your brand identity guidelines.',
      detail: 'We design stunning pitch decks, investor presentations, board reports, and internal communication templates that maintain visual consistency across your entire organization. Delivered in PowerPoint, Google Slides, Keynote, or PDF formats.',
      tags: ['Pitch Decks', 'PowerPoint', 'Google Slides', 'Brand Guidelines', 'Corporate Reports'],
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780564903/pexels-eva-bronzini-7661139_wfjfl4.jpg'
    },
    {
      title: 'Product & Marketing Posters',
      desc: 'Sleek, eye-catching product showcase graphics, digital menu cards, and promotional poster layouts. Present your offerings in the most professional light.',
      detail: 'From restaurant digital menus and product launch announcements to promotional event flyers, we produce high-resolution digital posters that are print-ready and web-optimized. Available in custom sizes for any platform or medium.',
      tags: ['Product Launch', 'Event Flyers', 'Digital Menus', 'High-Resolution', 'Print-Ready'],
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780567977/erik-mclean-J0ZD8r_ClGg-unsplash_gauxjy.jpg'
    },
    {
      title: 'Animated & Motion Designs',
      desc: 'Dynamic animated post designs, web graphics, and short promotional motion loops. Add life to your digital presence and keep your audience engaged longer.',
      detail: 'We create GIF animations, Lottie micro-animations, and short motion graphic loops for social media, websites, and digital signage. Motion content consistently outperforms static posts in reach and engagement metrics.',
      tags: ['GIF Animation', 'Motion Graphics', 'Lottie', 'Social Media', 'Digital Signage'],
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80&fit=crop'
    }
  ];
}
