import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      <!-- Minimal Header -->
      <header class="p-8 flex justify-between items-center border-b border-white/5">
        <div class="flex items-center gap-4">
          <span class="font-display font-bold tracking-widest text-xl">BRAVION.</span>
        </div>
        <a routerLink="/" class="text-xs font-bold tracking-widest text-gray-500 hover:text-[#e10600] transition-colors flex items-center gap-2">
          <span>←</span> BACK TO HOME
        </a>
      </header>

      <!-- Main Content -->
      <main class="flex-grow flex flex-col md:flex-row">
        <!-- Text Content -->
        <div class="w-full md:w-1/2 p-8 md:p-24 flex flex-col justify-center">
          <span class="text-[#e10600] text-xs font-bold tracking-[0.3em] uppercase mb-4">OUR SERVICE</span>
          <h1 class="text-5xl md:text-7xl font-display font-bold uppercase mb-8">{{ serviceId }}</h1>
          <div class="w-16 h-1 bg-[#e10600] mb-8"></div>
          <p class="text-gray-400 leading-relaxed mb-12 max-w-lg">
            This is a dedicated page detailing our {{ serviceId }} services. We provide world-class execution, unmatched precision, and premium quality tailored specifically to elevate your brand's presence in the market.
          </p>
          <button routerLink="/" class="self-start text-xs font-bold tracking-[0.2em] px-8 py-4 bg-white text-[#0a0a0a] hover:bg-[#e10600] hover:text-white transition-colors" style="clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);">
            REQUEST {{ serviceId | uppercase }} QUOTE
          </button>
        </div>
        
        <!-- Image Content -->
        <div class="w-full md:w-1/2 min-h-[50vh] bg-[#111] relative overflow-hidden">
          <img [src]="getImage()" class="absolute inset-0 w-full h-full object-cover opacity-80" alt="Service Image">
          <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60"></div>
        </div>
      </main>
    </div>
  `
})
export class ServiceDetailComponent implements OnInit {
  serviceId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.serviceId = params.get('id') || '';
    });
  }

  getImage() {
    const images: Record<string, string> = {
      'design': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
      'print': 'https://images.unsplash.com/photo-1598522325754-073010b9a8cb?w=1200&q=80',
      'brand': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
      'stationery': 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&q=80'
    };
    return images[this.serviceId.toLowerCase()] || images['design'];
  }
}
