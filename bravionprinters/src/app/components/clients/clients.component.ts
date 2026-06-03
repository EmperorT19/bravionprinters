import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [ngClass]="isHomeSection ? 'py-16 px-8 bg-[#0a0a0a] border-y border-white/5' : 'pt-24 pb-16 px-8 md:px-16 bg-[#0a0a0a] text-white min-h-screen border-b border-white/5'">
      <div class="max-w-7xl mx-auto">

        <!-- Standalone Page Header -->
        <div *ngIf="!isHomeSection" class="text-center mb-16">
          <h1 class="text-4xl md:text-6xl font-heading font-bold mb-4 text-white">CLIENTS & <span class="text-[#e10600]">PARTNERS</span></h1>
          <div class="w-16 h-1 bg-[#e10600] mx-auto mb-6"></div>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">We are proud to work with some of the most trusted brands and organizations in Kenya.</p>
        </div>

        <!-- Home section: condensed "Trusted By" row -->
        <div *ngIf="isHomeSection" class="flex flex-col md:flex-row items-center gap-12 justify-between">
          <h3 class="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase shrink-0">Trusted By</h3>
          <div class="flex-grow flex flex-wrap justify-center md:justify-end gap-6 md:gap-10">
            @for (client of clients; track client.name) {
              <div class="px-6 py-4 border border-white/20 rounded-md text-gray-500 font-bold text-sm tracking-widest hover:border-[#e10600] hover:text-white hover:bg-[#e10600]/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(225,6,0,0.2)] cursor-pointer">
                {{ client.name | uppercase }}
              </div>
            }
          </div>
        </div>

        <!-- Full client grid (standalone page only) -->
        <div *ngIf="!isHomeSection" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-24">
          @for (client of clients; track client.name) {
            <div class="bg-[#111] border border-white/10 p-8 flex items-center justify-center h-32 rounded-lg hover:border-[#e10600]/60 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(225,6,0,0.2)] hover:bg-[#1a0a0a] transition-all duration-400 cursor-pointer group">
              <span class="text-gray-500 font-bold tracking-widest uppercase text-center group-hover:text-white transition-colors duration-300">{{ client.name }}</span>
            </div>
          }
        </div>

        <!-- Partner Section (standalone page only) -->
        <div *ngIf="!isHomeSection" class="bg-[#111] border border-white/5 p-12 rounded-lg text-center max-w-4xl mx-auto">
          <h3 class="text-2xl font-heading font-bold mb-4 text-white">Become a Partner</h3>
          <p class="text-gray-400 leading-relaxed mb-8">
            Looking for a reliable branding and printing partner for your agency, events company, or corporate institution? We offer dedicated support and bulk rates for long-term partners.
          </p>
          <a href="mailto:info@bravionprinters.co.ke" class="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-[#0a0a0a] bg-white px-8 py-4 hover:bg-[#e10600] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(225,6,0,0.35)] rounded-full">
            CONTACT FOR PARTNERSHIP →
          </a>
        </div>

      </div>
    </div>
  `
})
export class ClientsComponent {
  @Input() isHomeSection: boolean = false;

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
