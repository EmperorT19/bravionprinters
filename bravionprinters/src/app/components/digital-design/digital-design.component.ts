import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-digital-design',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#e10600] selection:text-white pb-24">
      
      <!-- HERO -->
      <div class="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img src="/digital_design.png" class="absolute inset-0 w-full h-full object-cover opacity-50" alt="Digital Design">
        <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
        <div class="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span class="text-[#e10600] text-xs md:text-sm font-bold tracking-[0.3em] uppercase block mb-4 animate-pulse">Service Overview</span>
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold uppercase mb-6 drop-shadow-lg">Digital Design</h1>
          <p class="text-lg md:text-xl text-gray-200 font-medium max-w-2xl mx-auto">Engage your online audience with scroll-stopping digital graphics and ad creatives.</p>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-8 md:px-16 -mt-10 relative z-20">
        <!-- Content Section -->
        <div class="bg-[#111] border border-white/5 p-8 md:p-12 lg:p-16 rounded-xl shadow-2xl mb-16">
          <h2 class="text-2xl md:text-3xl font-heading font-bold mb-6 border-l-4 border-[#e10600] pl-4">Dominate The Digital Space</h2>
          <p class="text-gray-400 text-sm md:text-base leading-relaxed mb-10">
            In today's digital-first world, your online visual presence is just as important as your physical branding. We create high-converting, visually stunning digital assets tailored for social media, digital advertising, and online campaigns.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
            <div>
              <h3 class="text-sm font-bold tracking-widest text-[#e10600] uppercase mb-4">Social Media Graphics</h3>
              <ul class="space-y-3 text-gray-300 text-sm">
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#e10600] rounded-full"></span> Instagram & Facebook Posts</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#e10600] rounded-full"></span> LinkedIn B2B Graphics</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#e10600] rounded-full"></span> Twitter (X) Visuals</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#e10600] rounded-full"></span> YouTube Thumbnails</li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-bold tracking-widest text-[#e10600] uppercase mb-4">Ad Creatives & Campaigns</h3>
              <ul class="space-y-3 text-gray-300 text-sm">
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#e10600] rounded-full"></span> Google Display Network Ads</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#e10600] rounded-full"></span> Meta Ads Creatives</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#e10600] rounded-full"></span> Web Banners</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#e10600] rounded-full"></span> Email Newsletter Graphics</li>
              </ul>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-8 border-t border-white/5">
            <a routerLink="/contact" class="inline-flex items-center justify-center px-8 py-4 text-xs font-bold tracking-widest text-white bg-[#e10600] hover:bg-[#c00500] transition-colors" style="clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);">
              START DESIGN PROJECT
            </a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class DigitalDesignComponent {}
