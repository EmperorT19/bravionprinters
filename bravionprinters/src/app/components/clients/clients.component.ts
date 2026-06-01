import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pt-24 pb-16 px-8 md:px-16 bg-[#0a0a0a] text-white min-h-screen border-b border-white/5">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-6xl font-heading font-bold mb-4">CLIENTS & <span class="text-[#e10600]">PARTNERS</span></h1>
          <div class="w-16 h-1 bg-[#e10600] mx-auto mb-6"></div>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">We are proud to work with some of the most trusted brands and organizations in Kenya.</p>
        </div>

        <!-- Client Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-24">
          @for (client of clients; track client.name) {
            <div class="bg-[#111] border border-white/10 p-8 flex items-center justify-center h-32 rounded hover:border-[#e10600]/50 transition-colors cursor-pointer group">
              <span class="text-gray-500 font-bold tracking-widest uppercase text-center group-hover:text-white transition-colors">{{ client.name }}</span>
            </div>
          }
        </div>

        <!-- Partner Section -->
        <div class="bg-[#111] border border-white/5 p-12 rounded-lg text-center max-w-4xl mx-auto">
          <h3 class="text-2xl font-heading font-bold mb-4">Become a Partner</h3>
          <p class="text-gray-400 leading-relaxed mb-8">
            Looking for a reliable branding and printing partner for your agency, events company, or corporate institution? We offer dedicated support and bulk rates for long-term partners.
          </p>
          <a href="mailto:info@bravionprinters.co.ke" class="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-[#0a0a0a] bg-white px-8 py-3 hover:bg-[#e10600] hover:text-white transition-colors rounded-full">
            CONTACT FOR PARTNERSHIP
          </a>
        </div>
      </div>
    </div>
  `
})
export class ClientsComponent {
  readonly clients = [
    { name: 'AAR' },
    { name: 'AMREF' },
    { name: 'Coca-Cola' },
    { name: 'Villages of Africa' },
    { name: 'Nairobi Water' },
    { name: 'TechHub' },
    { name: 'Bloom Events' },
    { name: 'AutoFleet Kenya' }
  ];
}
