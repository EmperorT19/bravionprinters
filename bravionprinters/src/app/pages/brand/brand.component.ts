import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
            <div class="bg-neutral-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden flex flex-col group hover:border-[#e10600]/40 shadow-lg hover:shadow-[0_20px_50px_rgba(225,6,0,0.12)] transition-all duration-300 transform hover:-translate-y-2">
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
                <a routerLink="/contact" class="mt-auto pt-4 border-t border-white/5 flex items-center justify-between group/link text-xs font-semibold tracking-wider text-neutral-400 uppercase hover:text-white transition-colors">
                  <span>Start Branding</span>
                  <span class="text-[#e10600] group-hover/link:translate-x-1.5 transition-transform duration-300">&rarr;</span>
                </a>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class BrandComponent {
  readonly subServices = [
    {
      title: 'Vehicle Branding',
      desc: 'Turn personal cars, corporate fleets, matatus, school buses, delivery vans, and trucks into high-impact moving billboards with full or half wraps.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop'
    },
    {
      title: 'Signage & Shop Branding',
      desc: 'Eye-catching 3D acrylic signs, LED & neon signs, reception displays, billboard graphics, light boxes, and complete shop front fabrication.',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80&fit=crop'
    },
    {
      title: 'Branded Apparel & Uniforms',
      desc: 'High-quality custom branded t-shirts, polo shirts, hoodies, caps, safety reflectors, and corporate or institutional uniforms.',
      image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=800&q=80&fit=crop'
    },
    {
      title: 'Corporate Gifts & Merchandise',
      desc: 'Branded executive diaries, calendars, mugs, pens, water bottles, and gift hampers designed to establish lasting brand affinity.',
      image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80&fit=crop'
    },
    {
      title: 'Office & Glass Branding',
      desc: 'Transform your workspaces with frosted glass privacy stickers, customized wall wraps, partition decals, and office directional signs.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop'
    },
    {
      title: 'Events & Promotional Branding',
      desc: 'Comprehensive solutions for exhibitions and roadshows, featuring roll-up banners, teardrops, backdrops, custom gazebos, and branded tents.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&fit=crop'
    },
    {
      title: 'Institutional & Resort Branding',
      desc: 'Tailored branding designs for hotels, lodges, churches, and academic institutions, ensuring robust visibility and alignment.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&fit=crop'
    }
  ];
}

