import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-24 pb-16 px-8 md:px-16 bg-[#0a0a0a] text-white min-h-screen">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-6xl font-heading font-bold mb-4">OUR <span class="text-[#e10600]">PORTFOLIO</span></h1>
          <div class="w-16 h-1 bg-[#e10600] mx-auto mb-6"></div>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">A visual showcase of our best branding work across all service categories.</p>
        </div>

        <!-- Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          @for (cat of categories; track cat) {
            <button (click)="activeFilter.set(cat)" 
                    class="px-6 py-2 text-sm font-bold tracking-widest uppercase transition-colors rounded-full border border-white/20"
                    [class.bg-[#e10600]]="activeFilter() === cat"
                    [class.border-[#e10600]]="activeFilter() === cat"
                    [class.text-white]="activeFilter() === cat"
                    [class.hover:bg-white/10]="activeFilter() !== cat">
              {{ cat }}
            </button>
          }
        </div>

        <!-- Portfolio Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (item of filteredPortfolio(); track item.title) {
            <div class="group relative overflow-hidden bg-[#111] border border-white/5 cursor-pointer rounded h-64 shadow-lg hover:shadow-xl transition-shadow">
              <img [src]="item.image" [alt]="item.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                <span class="text-[#e10600] text-xs font-bold tracking-widest uppercase mb-1">{{ item.category }}</span>
                <h4 class="text-xl font-heading font-bold text-white">{{ item.title }}</h4>
              </div>
            </div>
          }
        </div>

        <!-- CTA -->
        <div class="text-center mt-20">
          <p class="text-gray-400 mb-6 text-sm">Like what you see? Let's work together on your next project.</p>
          <a routerLink="/contact" class="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-white bg-[#e10600] px-10 py-4 hover:bg-[#c00500] transition-colors" style="clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);">
            START YOUR PROJECT <span>→</span>
          </a>
        </div>
      </div>
    </div>
  `
})
export class PortfolioComponent {
  readonly categories = ['All', 'Vehicle', 'Signage', 'Apparel', 'Office', 'Events', 'Digital', 'Print'];
  readonly activeFilter = signal('All');

  readonly portfolio = [
    { title: 'AutoFleet Delivery Vans', category: 'Vehicle', image: '/vehicle_branding.png' },
    { title: 'TechHub 3D Signage', category: 'Signage', image: '/signage_branding.png' },
    { title: 'Bloom Events Corporate Kit', category: 'Apparel', image: '/corporate_apparel.png' },
    { title: 'Apex Towers Frosted Glass', category: 'Office', image: '/office_branding.png' },
    { title: 'Nairobi Marathon Setup', category: 'Events', image: '/event_branding.png' },
    { title: 'Social Media Campaign Q3', category: 'Digital', image: '/digital_design.png' },
    { title: 'Annual Report 2025', category: 'Print', image: '/printing_stationery.png' },
    { title: 'Matatu Wrap Design', category: 'Vehicle', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop' },
    { title: 'Shopfront Lightbox', category: 'Signage', image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&q=80&fit=crop' }
  ];

  filteredPortfolio() {
    if (this.activeFilter() === 'All') return this.portfolio;
    return this.portfolio.filter(item => item.category === this.activeFilter());
  }
}
