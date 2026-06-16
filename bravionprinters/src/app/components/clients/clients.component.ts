import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [ngClass]="isHomeSection ? 'py-16 px-6 md:px-8 bg-[#0a0a0a] border-y border-white/5' : 'pt-28 pb-16 px-6 md:px-16 bg-[#0a0a0a] text-white min-h-screen border-b border-white/5'">
      <div class="max-w-7xl mx-auto">

        <!-- Standalone Page Header -->
        <div *ngIf="!isHomeSection" class="text-center mb-16">
          <h1 class="text-4xl md:text-6xl font-heading font-bold mb-4 text-white">CLIENTS & <span class="text-[#e10600]">PARTNERS</span></h1>
          <div class="w-16 h-1 bg-[#e10600] mx-auto mb-6"></div>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">We are proud to work with some of the most trusted brands and organizations in Kenya.</p>
        </div>

        <!-- Home section: condensed "Trusted By" row -->
        <div *ngIf="isHomeSection" class="flex flex-col lg:flex-row items-center gap-8 justify-between">
          <h3 class="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase shrink-0">Trusted By</h3>
          <div class="flex-grow flex flex-wrap justify-center lg:justify-end gap-4 md:gap-6">
            @for (client of clients; track client.name) {
              <div class="flex flex-col items-center gap-2 p-3 bg-white border border-neutral-200 rounded-lg w-28 md:w-36 hover:border-[#e10600] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer shadow-sm">
                <div class="h-10 md:h-12 w-full flex items-center justify-center bg-white rounded p-1">
                  <img [src]="client.image" [alt]="client.name" class="max-h-full max-w-[85%] object-contain" />
                </div>
                <span class="bg-white text-[#e10600] font-bold text-[10px] md:text-xs tracking-wider uppercase px-2 py-1 rounded w-full text-center">{{ client.name }}</span>
              </div>
            }
          </div>
        </div>

        <!-- Full client grid (standalone page only) -->
        <div *ngIf="!isHomeSection" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 mb-24">
          @for (client of clients; track client.name) {
            <div class="bg-white border border-neutral-200 p-4 md:p-6 flex flex-col items-center justify-between h-36 md:h-44 rounded-lg hover:border-[#e10600]/60 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(225,6,0,0.15)] hover:bg-white transition-all duration-400 cursor-pointer group shadow-sm">
              <div class="flex-grow flex items-center justify-center w-full min-h-[50px] max-h-[70px] md:max-h-[90px] bg-white rounded p-2">
                <img [src]="client.image" [alt]="client.name" class="max-h-full max-w-[80%] object-contain" />
              </div>
              <span class="bg-white text-[#e10600] font-bold tracking-wider uppercase text-center text-[10px] md:text-xs px-2 md:px-3 py-1.5 rounded w-full block mt-3">{{ client.name }}</span>
            </div>
          }
        </div>

        <!-- Partner Section (standalone page only) -->
        <div *ngIf="!isHomeSection" class="bg-[#111] border border-white/5 p-12 rounded-lg text-center max-w-4xl mx-auto">
          <h3 class="text-2xl font-heading font-bold mb-4 text-white">Become a Partner</h3>
          <p class="text-gray-400 leading-relaxed mb-8">
            Looking for a reliable branding and printing partner for your agency, events company, or corporate institution? We offer dedicated support and bulk rates for long-term partners.
          </p>
          <a href="mailto:info@braviongroup.co.ke" class="partnership-btn group inline-flex items-center gap-2 text-sm font-bold tracking-widest text-[#0a0a0a] bg-white px-8 py-4 rounded-full cursor-pointer transition-all duration-300">
            CONTACT FOR PARTNERSHIP 
            <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .partnership-btn {
      transition: all 0.3s ease-in-out;
    }
    .partnership-btn:hover {
      background-color: #e10600 !important;
      color: #ffffff !important;
      transform: translateY(-4px) !important;
      box-shadow: 0 10px 25px rgba(225, 6, 0, 0.35) !important;
    }
  `]
})
export class ClientsComponent {
  @Input() isHomeSection: boolean = false;

  readonly clients = [
    { name: 'AAR', image: 'client_aar.png' },
    { name: 'AMREF', image: 'client_amref.png' },
    { name: 'Coca-Cola', image: 'client_cocacola.png' },
    { name: 'Villages of Africa', image: 'client_villages.png' },
    { name: 'Nairobi Water', image: 'client_nairobiwater.png' },
    { name: 'TechHub', image: 'client_techhub.png' },
    { name: 'Bloom Events', image: 'client_bloomevents.png' },
    { name: 'AutoFleet Kenya', image: 'client_autofleet.png' }
  ];
}
