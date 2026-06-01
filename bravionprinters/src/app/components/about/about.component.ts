import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pt-24 pb-16 px-8 md:px-16 bg-[#0a0a0a] text-white min-h-screen">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-6xl font-heading font-bold mb-4">ABOUT <span class="text-[#e10600]">US</span></h1>
          <div class="w-16 h-1 bg-[#e10600] mx-auto mb-6"></div>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">We are Bravion Printers Ltd – Your trusted one-stop branding and printing partner in Kenya since July 2022.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 class="text-3xl font-heading font-bold mb-6">Our Story</h2>
            <p class="text-gray-300 leading-relaxed mb-4">
              Established in July 2022, Bravion Printers Ltd was born out of a passion for high-quality design and exceptional print delivery. We recognized a gap in the market for a reliable, all-in-one branding agency that businesses could trust.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Located in Kilimani, Nairobi, we have grown into a fully equipped branding powerhouse. From vehicle wraps that turn heads on the highway to premium corporate stationery that seals the deal, we handle it all with precision and creativity.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-[#111] p-8 text-center border border-white/5 rounded">
              <span class="text-4xl font-heading font-bold text-[#e10600] block mb-2">500+</span>
              <span class="text-xs font-bold tracking-widest text-gray-500 uppercase">Projects</span>
            </div>
            <div class="bg-[#111] p-8 text-center border border-white/5 rounded">
              <span class="text-4xl font-heading font-bold text-[#e10600] block mb-2">200+</span>
              <span class="text-xs font-bold tracking-widest text-gray-500 uppercase">Clients</span>
            </div>
            <div class="bg-[#111] p-8 text-center border border-white/5 rounded">
              <span class="text-4xl font-heading font-bold text-[#e10600] block mb-2">100%</span>
              <span class="text-xs font-bold tracking-widest text-gray-500 uppercase">Quality</span>
            </div>
            <div class="bg-[#111] p-8 text-center border border-white/5 rounded">
              <span class="text-4xl font-heading font-bold text-[#e10600] block mb-2">24/7</span>
              <span class="text-xs font-bold tracking-widest text-gray-500 uppercase">Support</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div class="bg-white text-[#0a0a0a] p-10 rounded shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <h3 class="text-2xl font-heading font-bold mb-4">Our Mission</h3>
            <p class="text-gray-600">To provide complete branding solutions with quick turnaround and quality results. We design, we brand, you grow. All your branding needs, one trusted partner.</p>
          </div>
          <div class="bg-[#e10600] text-white p-10 rounded shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <h3 class="text-2xl font-heading font-bold mb-4">Our Vision</h3>
            <p class="text-white/90">To be one of the leading modern branding companies in Kenya, known for professionalism, creativity, trust, and strong visual identity in every project we deliver.</p>
          </div>
          <div class="bg-white text-[#0a0a0a] p-10 rounded shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <h3 class="text-2xl font-heading font-bold mb-4">Our Core Values</h3>
            <ul class="text-gray-600 space-y-2 font-medium">
              <li>✓ Creativity & Innovation</li>
              <li>✓ Uncompromising Quality</li>
              <li>✓ Professionalism</li>
              <li>✓ Reliability & Speed</li>
              <li>✓ Customer Centricity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}
