import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
                  <span>Start a Project</span>
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
export class DesignComponent {
  readonly subServices = [
    {
      title: 'Social Media Graphics',
      desc: 'Engaging, brand-aligned graphics for Instagram, Facebook, LinkedIn, and Twitter. We create visuals that capture attention and drive audience interaction.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80&fit=crop'
    },
    {
      title: 'Digital Promotional Ads',
      desc: 'High-conversion banner ads, display creatives, and promotional graphics optimized for online marketing campaigns. Designed to maximize your campaign ROI.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop'
    },
    {
      title: 'Video & Article Thumbnails',
      desc: 'Captivating, high-impact custom thumbnails designed to maximize click-through rates. Make your YouTube videos, blogs, and articles stand out from the crowd.',
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780567975/kyle-loftus-6eREmQ0VY-k-unsplash_ufxahs.jpg'
    },
    {
      title: 'Corporate Digital Layouts',
      desc: 'Professional pitch decks, corporate presentation templates, and digital documents. Align your corporate communications with your brand identity guidelines.',
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780564903/pexels-eva-bronzini-7661139_wfjfl4.jpg'
    },
    {
      title: 'Product & Marketing Posters',
      desc: 'Sleek, eye-catching product showcase graphics, digital menu cards, and promotional poster layouts. Present your offerings in the most professional light.',
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780567977/erik-mclean-J0ZD8r_ClGg-unsplash_gauxjy.jpg'
    },
    {
      title: 'Animated & Motion Designs',
      desc: 'Dynamic animated post designs, web graphics, and short promotional motion loops. Add life to your digital presence and keep your audience engaged longer.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80&fit=crop'
    }
  ];
}

