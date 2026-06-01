import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vehicle-branding',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#e10600] selection:text-white pb-24">
      
      <!-- HERO -->
      <div class="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img src="/vehicle_branding.png" class="absolute inset-0 w-full h-full object-cover opacity-50" alt="Vehicle Branding">
        <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
        <div class="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span class="text-[#e10600] text-xs md:text-sm font-bold tracking-[0.3em] uppercase block mb-4 animate-pulse">Service Overview</span>
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold uppercase mb-6 drop-shadow-lg">Vehicle Branding</h1>
          <p class="text-lg md:text-xl text-gray-200 font-medium max-w-2xl mx-auto">Turn your company vehicles into moving billboards with premium wraps and decals.</p>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-8 md:px-16 -mt-10 relative z-20">
        <!-- Content Section -->
        <div class="bg-[#111] border border-white/5 p-8 md:p-12 lg:p-16 rounded-xl shadow-2xl mb-16">
          <h2 class="text-2xl md:text-3xl font-heading font-bold mb-6 border-l-4 border-[#e10600] pl-4">Drive Your Brand Forward</h2>
          <p class="text-gray-400 text-sm md:text-base leading-relaxed mb-10">
            Vehicle branding is one of the most cost-effective marketing strategies available. Whether you have a single delivery van or a nationwide fleet of trucks, Bravion Printers provides high-quality, durable, and eye-catching vehicle wraps that make sure your brand is seen everywhere you go.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
            <div>
              <h3 class="text-sm font-bold tracking-widest text-[#e10600] uppercase mb-4">What We Brand</h3>
              <ul class="space-y-3 text-gray-300 text-sm">
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#e10600] rounded-full"></span> Corporate Cars</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#e10600] rounded-full"></span> Delivery Vans</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#e10600] rounded-full"></span> PSV (Matatus & Buses)</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#e10600] rounded-full"></span> Heavy Commercial Trucks</li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-bold tracking-widest text-[#e10600] uppercase mb-4">Our Wrapping Options</h3>
              <ul class="space-y-3 text-gray-300 text-sm">
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#e10600] rounded-full"></span> Full Vehicle Wraps</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#e10600] rounded-full"></span> Partial Wraps & Decals</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#e10600] rounded-full"></span> Reflective Tape Branding</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#e10600] rounded-full"></span> One-Way Vision Glass Branding</li>
              </ul>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-8 border-t border-white/5">
            <a routerLink="/contact" class="inline-flex items-center justify-center px-8 py-4 text-xs font-bold tracking-widest text-white bg-[#e10600] hover:bg-[#c00500] transition-colors" style="clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);">
              REQUEST QUOTE
            </a>
            <a href="https://wa.me/254726612470" target="_blank" class="inline-flex items-center justify-center px-8 py-4 text-xs font-bold tracking-widest text-white border border-white/20 hover:border-white hover:bg-white/5 transition-colors" style="clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);">
              WHATSAPP US
            </a>
          </div>
        </div>

        <!-- Mini Portfolio -->
        <div>
          <h2 class="text-2xl font-heading font-bold mb-8 text-center">Recent Vehicle Branding Work</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="h-64 bg-[#111] rounded overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop" alt="Van Wrap" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100">
            </div>
            <div class="h-64 bg-[#111] rounded overflow-hidden group">
              <img src="/vehicle_branding.png" alt="Truck Branding" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100">
            </div>
            <div class="h-64 bg-[#111] rounded overflow-hidden group flex items-center justify-center border border-white/10 cursor-pointer hover:border-[#e10600] transition-colors" routerLink="/portfolio">
              <span class="text-sm font-bold tracking-widest text-[#e10600] uppercase">View Full Portfolio →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class VehicleBrandingComponent {}
