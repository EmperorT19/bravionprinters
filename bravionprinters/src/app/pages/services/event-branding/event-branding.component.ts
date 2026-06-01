import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-branding',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#e10600] selection:text-white pb-24">
      
      <!-- HERO -->
      <div class="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img src="/event_branding.png" class="absolute inset-0 w-full h-full object-cover opacity-50" alt="Event Branding">
        <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
        <div class="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span class="text-[#e10600] text-xs md:text-sm font-bold tracking-[0.3em] uppercase block mb-4 animate-pulse">Service Overview</span>
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold uppercase mb-6 drop-shadow-lg">Event Branding</h1>
          <p class="text-lg md:text-xl text-gray-200 font-medium max-w-2xl mx-auto">Dominate exhibitions, trade shows, and corporate events with premium promotional materials.</p>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-8 md:px-16 -mt-10 relative z-20">
        <!-- Content Section -->
        <div class="bg-[#111] border border-white/5 p-8 md:p-12 lg:p-16 rounded-xl shadow-2xl mb-16">
          <h2 class="text-2xl md:text-3xl font-heading font-bold mb-6 border-l-4 border-[#e10600] pl-4">Stand Out In The Crowd</h2>
          <p class="text-gray-400 text-sm md:text-base leading-relaxed mb-10">
            When you're at an exhibition or outdoor event, you have seconds to capture attention. Our event branding materials are designed to be vibrant, durable, and highly visible. We provide everything you need to set up a professional corporate booth anywhere.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
            <div>
              <h3 class="text-sm font-bold tracking-widest text-[#e10600] uppercase mb-4">Indoor Event Setups</h3>
              <ul class="space-y-3 text-gray-300 text-sm">
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#e10600] rounded-full"></span> Roll-up Banners (Broadbase & Slim)</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#e10600] rounded-full"></span> Media Wall Backdrops</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#e10600] rounded-full"></span> Exhibition Counter Podiums</li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-bold tracking-widest text-[#e10600] uppercase mb-4">Outdoor Event Setups</h3>
              <ul class="space-y-3 text-gray-300 text-sm">
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#e10600] rounded-full"></span> Tear Drop & Telescopic Flags</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#e10600] rounded-full"></span> Branded Gazebos & Tents</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#e10600] rounded-full"></span> A-Frame Boards</li>
              </ul>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-8 border-t border-white/5">
            <a routerLink="/contact" class="inline-flex items-center justify-center px-8 py-4 text-xs font-bold tracking-widest text-white bg-[#e10600] hover:bg-[#c00500] transition-colors" style="clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);">
              GET A QUOTE
            </a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class EventBrandingComponent {}
