import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-stationery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-[#0a0a0a] text-white pt-28 pb-16">
      <!-- Hero Section -->
      <div class="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 relative">
        <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#e10600]/10 rounded-full blur-3xl -z-10"></div>
        <h1 class="text-4xl md:text-6xl font-heading font-extrabold mb-4 uppercase tracking-tight">
          Stationery <span class="text-[#e10600]">Services</span>
        </h1>
        <div class="w-16 h-1 bg-[#e10600] mx-auto mb-6"></div>
        <p class="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium">
          Professional business stationery supply and custom paper print solutions, ensuring your daily office operations remain smooth, branded, and efficient.
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
                  <span>Order Stationery</span>
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
export class StationeryComponent {
  readonly subServices = [
    {
      title: 'Custom Receipt & Invoice Books',
      desc: 'Carbonless (NCR) duplicate, triplicate, or quadruplicate receipt books, invoice logs, delivery notes, and cash sale books branded with your logo.',
      image: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=800&q=80&fit=crop'
    },
    {
      title: 'Company Stamps & Seals',
      desc: 'High-durability self-inking rubber stamps, pocket stamps, date stamps, and official heavy-duty embossed corporate seals.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80&fit=crop'
    },
    {
      title: 'Custom Envelopes & Letterheads',
      desc: 'Letterheads and envelopes custom-branded in standard sizes (DL, C5, C4). Perfectly aligned to build consistent executive correspondence.',
      image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80&fit=crop'
    },
    {
      title: 'Office Stationery Supplies',
      desc: 'General office stationery packs, custom branded presentation folders, files, writing pads, journals, and executive desk accessories.',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80&fit=crop'
    },
    {
      title: 'School Exercise Books & Diaries',
      desc: 'Premium school exercise books, class notebooks, diaries, report cards, and customized academic layout papers for educational institutions.',
      image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80&fit=crop'
    },
    {
      title: 'Toners & Consumables',
      desc: 'Genuine laser printer toners, photocopy cartridges, plotting paper rolls, thermal receipts, and other high-grade printing consumables.',
      image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&q=80&fit=crop'
    }
  ];
}

