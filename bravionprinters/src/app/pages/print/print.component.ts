import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-print',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-[#0a0a0a] text-white pt-28 pb-16">
      <!-- Hero Section -->
      <div class="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 relative">
        <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#e10600]/10 rounded-full blur-3xl -z-10"></div>
        <h1 class="text-4xl md:text-6xl font-heading font-extrabold mb-4 uppercase tracking-tight">
          Print <span class="text-[#e10600]">Services</span>
        </h1>
        <div class="w-16 h-1 bg-[#e10600] mx-auto mb-6"></div>
        <p class="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium">
          High-precision commercial printing services utilizing state-of-the-art technology to deliver crisp, vibrant, and professional publications.
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
                  <span>Inquire Now</span>
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
export class PrintComponent {
  readonly subServices = [
    {
      title: 'Company Profiles & Catalogues',
      desc: 'Sleek, corporate-standard profile books, directories, product catalogs, and pamphlets. Establish solid business credentials with outstanding print quality.',
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780564906/pexels-alleksana-4271624_agpyln.jpg'
    },
    {
      title: 'Annual & Strategic Reports',
      desc: 'Professional document print production for corporate annual reports, strategic plans, audit results, and tender proposal packages with durable binding.',
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780564899/pexels-mart-production-7605981_czeiyj.jpg'
    },
    {
      title: 'Brochures, Flyers & Leaflets',
      desc: 'Vibrant, sharp commercial brochures and single-sheet marketing flyers. Available in single, bi-fold, or tri-fold styles with premium texturized coatings.',
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780564906/pexels-casnafu-36823601_yjheqq.jpg'
    },
    {
      title: 'Premium Business Cards',
      desc: 'Custom-designed executive business cards printed on thick cardstocks with options for soft-touch matte lamination, spot UV, or luxury gold foil stamping.',
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780564907/pexels-ai25studioai-6620968_vo3jks.jpg'
    },
    {
      title: 'Offset & Bulk Printing',
      desc: 'Cost-efficient bulk commercial printing using state-of-the-art offset lithography machines. Perfect for high-volume flyers, newsletters, and manuals.',
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780564904/pexels-criiv-9550363_yiiu3j.jpg'
    },
    {
      title: 'Books & Publication Printing',
      desc: 'Complete printing services for academic books, magazines, manuals, novels, and catalogs. Includes typesetting assistance, softcover/hardcover binding, and laminating.',
      image: 'https://res.cloudinary.com/duwyaucf1/image/upload/v1780566147/pexels-wutthichai-charoenburi-553075115-19843566_mbpfto.jpg'
    }
  ];
}

