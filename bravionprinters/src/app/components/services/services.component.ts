import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-24 pb-16 px-8 md:px-16 bg-[#f5f5f3] text-[#0a0a0a] min-h-screen">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-6xl font-heading font-bold mb-4">OUR <span class="text-[#e10600]">SERVICES</span></h1>
          <div class="w-16 h-1 bg-[#e10600] mx-auto mb-6"></div>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">Comprehensive branding solutions tailored for businesses that refuse to compromise on quality.</p>
        </div>

        <div class="flex flex-col gap-16">
          @for (category of categories; track category.name) {
            <div class="category-section">
              <div class="flex items-center gap-4 mb-8">
                <h2 class="text-3xl font-heading font-extrabold text-[#e10600] uppercase">{{ category.name }}</h2>
                <div class="h-[1px] bg-gray-300 flex-grow"></div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                @for (service of category.services; track service.title) {
                  <div class="bg-white rounded shadow-lg overflow-hidden flex flex-col group hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div class="h-48 overflow-hidden relative">
                      <img [src]="service.image" [alt]="service.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div class="p-8 flex-grow flex flex-col">
                      <h3 class="text-xl font-heading font-bold mb-3 group-hover:text-[#e10600] transition-colors">{{ service.title }}</h3>
                      <p class="text-gray-600 text-sm mb-6 flex-grow">{{ service.desc }}</p>
                      <a [routerLink]="service.link" class="inline-block mt-auto text-sm font-bold tracking-widest text-[#e10600] uppercase hover:text-[#0a0a0a] transition-colors">
                        Learn More &rarr;
                      </a>
                    </div>
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `
})
export class ServicesComponent {
  readonly categories = [
    {
      name: 'Design',
      services: [
        {
          title: 'Digital & Graphic Design',
          desc: 'Social media posters, ad creatives, thumbnails, and corporate graphic design.',
          link: '/digital-design',
          image: '/digital_design.png'
        }
      ]
    },
    {
      name: 'Print',
      services: [
        {
          title: 'Commercial Printing',
          desc: 'Flyers, brochures, company profiles, annual reports, and high-volume commercial prints.',
          link: '/printing-stationery',
          image: '/printing_stationery.png'
        }
      ]
    },
    {
      name: 'Brand',
      services: [
        {
          title: 'Vehicle Branding',
          desc: 'Full wraps, partial wraps, and fleet branding for cars, matatus, buses, and trucks.',
          link: '/vehicle-branding',
          image: '/vehicle_branding.png'
        },
        {
          title: 'Signage & Shop Branding',
          desc: '3D signs, LED signs, reception signs, and outdoor signage solutions.',
          link: '/signage-branding',
          image: '/signage_branding.png'
        },
        {
          title: 'Corporate Apparel & Gifts',
          desc: 'Branded t-shirts, caps, hoodies, mugs, diaries, and promotional merchandise.',
          link: '/corporate-branding',
          image: '/corporate_apparel.png'
        },
        {
          title: 'Office & Glass Branding',
          desc: 'Frosted stickers, wall wraps, office signage, and reception branding.',
          link: '/office-branding',
          image: '/office_branding.png'
        },
        {
          title: 'Events & Promotional',
          desc: 'Roll-up banners, tear drops, backdrops, branded tents, and event setups.',
          link: '/event-branding',
          image: '/event_branding.png'
        }
      ]
    },
    {
      name: 'Stationery',
      services: [
        {
          title: 'Corporate Stationery',
          desc: 'Premium business cards, custom letterheads, presentation folders, and notebooks.',
          link: '/printing-stationery',
          image: '/printing_stationery.png'
        }
      ]
    }
  ];
}
