import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

interface ServiceData {
  title: string;
  headline: string;
  subheadline: string;
  overview: string;
  listTitle: string;
  listItems: { label: string; desc: string }[];
  noteTitle: string;
  noteContent: string;
  image: string;
  specifications: { label: string; value: string }[];
}

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans selection:bg-[#e10600] selection:text-white">
      <!-- HEADER -->
      <header class="px-8 py-6 flex justify-between items-center border-b border-white/5 bg-[#050505]/60 backdrop-blur-md sticky top-0 z-50">
        <div class="flex items-center gap-3">
          <span class="font-display font-extrabold tracking-widest text-xl text-white">BRAVION<span class="text-[#e10600]">.</span></span>
          <span class="text-[10px] tracking-widest text-gray-500 font-medium uppercase hidden sm:inline">Design & Print Agency</span>
        </div>
        <a routerLink="/" class="text-xs font-bold tracking-widest text-gray-400 hover:text-[#e10600] transition-colors duration-300 flex items-center gap-2 group">
          <span class="transform group-hover:-translate-x-1 transition-transform">←</span> BACK TO HOME
        </a>
      </header>

      <!-- MAIN LAYOUT -->
      <main class="flex-grow flex flex-col lg:flex-row">
        <!-- LEFT PANEL: CONTENT -->
        <div class="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-gradient-to-br from-[#0a0a0a] to-[#121212] overflow-y-auto">
          <div class="max-w-xl">
            <!-- Category Tag -->
            <span class="text-[#e10600] text-xs font-bold tracking-[0.3em] uppercase block mb-3 animate-pulse">
              {{ currentData.title }}
            </span>
            
            <!-- Headline -->
            <h1 class="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight uppercase mb-4 text-white">
              {{ currentData.headline }}
            </h1>
            
            <div class="w-20 h-1 bg-[#e10600] mb-8"></div>

            <!-- Subheadline -->
            <p class="text-lg md:text-xl font-medium text-gray-300 mb-6 border-l-2 border-white/10 pl-4 italic">
              {{ currentData.subheadline }}
            </p>

            <!-- Service Overview -->
            <p class="text-gray-400 text-sm leading-relaxed mb-10">
              {{ currentData.overview }}
            </p>

            <!-- Deliverables / What We Do -->
            <div class="mb-10">
              <h3 class="text-xs font-bold tracking-widest text-gray-400 uppercase mb-6 flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-[#e10600] rounded-full"></span>
                {{ currentData.listTitle }}
              </h3>
              <div class="flex flex-col gap-6">
                <div *ngFor="let item of currentData.listItems; let i = index" class="flex gap-4 items-start group">
                  <span class="text-[#e10600] text-xs font-display font-bold pt-1">
                    {{ (i + 1).toString().padStart(2, '0') }}.
                  </span>
                  <div>
                    <h4 class="text-sm font-bold text-white tracking-wide mb-1 uppercase group-hover:text-[#e10600] transition-colors duration-200">
                      {{ item.label }}
                    </h4>
                    <p class="text-gray-400 text-xs leading-relaxed">
                      {{ item.desc }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Specifications Grid -->
            <div class="mb-10 border-t border-white/5 pt-8">
              <h3 class="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-[#e10600] rounded-full"></span>
                Service Specifications
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div *ngFor="let spec of currentData.specifications" class="p-4 bg-white/[0.01] border border-white/5 rounded hover:border-white/20 transition-colors duration-300">
                  <span class="text-[10px] tracking-wider text-gray-500 font-bold uppercase block mb-1">{{ spec.label }}</span>
                  <span class="text-xs text-gray-300 leading-normal">{{ spec.value }}</span>
                </div>
              </div>
            </div>

            <!-- Custom Process / Info Note -->
            <div class="p-6 bg-white/[0.02] border-l-4 border-[#e10600] rounded-r-md mb-12">
              <h4 class="text-xs font-bold tracking-widest text-white uppercase mb-2">
                {{ currentData.noteTitle }}
              </h4>
              <p class="text-gray-400 text-xs leading-relaxed font-mono">
                {{ currentData.noteContent }}
              </p>
            </div>

            <!-- CTA Action Button -->
            <button routerLink="/" class="group inline-flex items-center justify-between text-xs font-bold tracking-[0.2em] px-8 py-5 bg-[#e10600] text-white hover:bg-white hover:text-[#0a0a0a] transition-all duration-300 shadow-lg shadow-[#e10600]/10 hover:shadow-white/5" style="clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);">
              <span>REQUEST A QUOTE</span>
              <span class="ml-4 transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        <!-- RIGHT PANEL: HERO VISUAL -->
        <div class="w-full lg:w-1/2 min-h-[40vh] lg:min-h-screen bg-[#111] relative overflow-hidden flex items-center justify-center">
          <img [src]="currentData.image" class="absolute inset-0 w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-[4000ms] ease-out" alt="Service Showcase">
          <!-- Premium overlays for depth -->
          <div class="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent opacity-90"></div>
          <div class="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 to-[#0a0a0a]"></div>
          
          <!-- Badge overlay with active service details -->
          <div class="absolute bottom-12 left-8 md:left-16 z-10 flex flex-col gap-2 pointer-events-none">
            <span class="text-[#e10600] text-[10px] font-bold tracking-[0.4em] uppercase">Premium Visual Showcase</span>
            <h3 class="text-2xl font-display font-extrabold tracking-wider uppercase text-white">{{ serviceId }}</h3>
          </div>
        </div>
      </main>
    </div>
  `
})
export class ServiceDetailComponent implements OnInit {
  serviceId: string = 'design';

  private readonly servicesData: Record<string, ServiceData> = {
    'design': {
      title: 'Graphic Design Services',
      headline: 'Visual Concepts That Tell Your Story',
      subheadline: 'Professional graphic design tailored to elevate your business and engage your audience.',
      overview: 'At Bravion Printers, we combine strategic thinking with creative design to build visuals that make an impact. Whether you need digital assets or marketing materials, our designs are crafted to reflect your specific goals.',
      listTitle: 'What We Do',
      listItems: [
        { label: 'Marketing Collateral', desc: 'Brochures, flyers, and posters that command attention.' },
        { label: 'Digital Graphics', desc: 'Social media assets, web banners, and presentation decks optimized for conversion.' },
        { label: 'Custom Illustrations', desc: 'Tailored iconography, vector artwork, and custom branding assets.' }
      ],
      specifications: [
        { label: 'File Formats Supplied', value: 'Vector (AI, EPS, SVG, PDF) + raster (PNG, JPG) assets' },
        { label: 'Revision Cycles', value: 'Up to 3 comprehensive rounds of changes included' },
        { label: 'Licensing & Rights', value: 'Full commercial copyright ownership transferred upon signoff' },
        { label: 'Standard Delivery', value: '3 to 5 business days for initial conceptual proofs' }
      ],
      noteTitle: 'Our Process',
      noteContent: 'Consultation → Concept Drafts → Final Revision',
      image: '/bravion_design.png'
    },
    'print': {
      title: 'Commercial Print Solutions',
      headline: 'High-Quality Printing Services You Can Touch',
      subheadline: 'Bringing your digital designs to life with premium materials and precision printing.',
      overview: "Don't let your designs stay trapped on a screen. Our print solutions ensure that your physical marketing materials look sharp, vibrant, and professional. We offer a wide range of paper stocks, finishes, and custom sizes.",
      listTitle: 'Print Capabilities',
      listItems: [
        { label: 'Large Format', desc: 'Banners, signage, and exhibition displays built to endure.' },
        { label: 'Promotional Prints', desc: 'High-volume flyers, booklets, and custom event packaging.' },
        { label: 'Finishing Options', desc: 'Matte, gloss, spot UV coating, and custom die-cuts.' }
      ],
      specifications: [
        { label: 'Paper Stock Options', value: '150gsm to 450gsm luxury matte, silk, gloss, and textured boards' },
        { label: 'Color Calibration', desc: 'Precision CMYK litho and digital printing with custom Pantone matching' } as any, // fallback
        { label: 'Finishing Trims', value: 'Soft-touch laminate, embossing, foil stamping, edge painting' },
        { label: 'Pre-flight Proofing', value: 'Complementary digital soft proofing (physical proof on request)' }
      ].map(s => ({ label: s.label, value: s.value || 'Precision color matching system' })),
      noteTitle: 'Turnaround Time Note',
      noteContent: 'Standard turnaround is 3-5 business days from proof approval.',
      image: '/bravion_print.png'
    },
    'brand': {
      title: 'Brand Identity & Strategy',
      headline: 'Build a Brand That Stands Out',
      subheadline: 'Complete identity systems designed to establish trust and recognition in your market.',
      overview: "A great brand is more than just a beautiful logo—it’s how your entire business communicates. We help define your brand's voice, visual guidelines, and core identity so you remain instantly recognizable across all platforms.",
      listTitle: 'Core Deliverables',
      listItems: [
        { label: 'Logo Design', desc: 'Primary, secondary, and sub-mark logo variations for diverse environments.' },
        { label: 'Brand Style Guides', desc: 'Strict rules for your typography, color palettes, and imagery usage.' },
        { label: 'Brand Voice', desc: 'Guidelines on tone, messaging strategy, and alignment with core values.' }
      ],
      specifications: [
        { label: 'Stylebook Depth', value: 'Comprehensive 20-30 page rules document detailing complete brand usage' },
        { label: 'Color Space Specs', value: 'Digital HEX/RGB and print CMYK/Pantone color guidelines' },
        { label: 'Typography Packaging', value: 'Core heading, subheading, and body font pairing system' },
        { label: 'Strategic Research', value: 'Competitive brand audit, target audience assessment, and positioning report' }
      ],
      noteTitle: 'Client Note',
      noteContent: 'A cohesive brand establishes immediate market authority and builds long-term customer equity.',
      image: '/bravion_brand.png'
    },
    'stationery': {
      title: 'Corporate Stationery Systems',
      headline: 'Professional Stationery for Daily Business',
      subheadline: 'Make every communication count with cohesive corporate stationery.',
      overview: 'Every letter you send, invoice you print, or business card you hand out is a reflection of your professionalism. Our custom corporate stationery ensures your brand looks unified and premium in every physical interaction.',
      listTitle: 'Stationery Essentials',
      listItems: [
        { label: 'Business Cards', desc: 'Premium paper weights (cotton, textured) with custom finishes.' },
        { label: 'Letterheads & Envelopes', desc: 'Standard corporate letterheads optimized for both print and digital use.' },
        { label: 'Presentation Folders', desc: 'Custom die-cut folders to hold invoices, contracts, or marketing kits.' }
      ],
      specifications: [
        { label: 'Paper Materials', value: '350gsm to 600gsm premium luxury linen, cotton, and eco-recycled paper' },
        { label: 'Embellishments', value: 'Hot foil stamping, debossing, blind letterpress, and painted card edges' },
        { label: 'Standard Dimensions', value: 'Business Cards (90x55mm), Letterheads (A4), Custom corporate envelopes' },
        { label: 'Digital Templates', value: 'Matching letterhead templates in MS Word and HTML format' }
      ],
      noteTitle: 'Ordering Information',
      noteContent: 'Minimum order quantities starting at 100 units. Custom paper stocks available.',
      image: '/bravion_stationery.png'
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.serviceId = params.get('id') || 'design';
    });
  }

  get currentData(): ServiceData {
    const id = this.serviceId.toLowerCase();
    return this.servicesData[id] || this.servicesData['design'];
  }
}
