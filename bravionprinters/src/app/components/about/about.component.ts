import { Component, Input, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPANY_INFO } from '../../data/company-info';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [ngClass]="isHomeSection ? 'py-24 px-8 md:px-16 bg-white text-[#0a0a0a]' : 'pt-24 pb-16 px-8 md:px-16 bg-[#0a0a0a] text-white min-h-screen'">
      <div class="max-w-7xl mx-auto">
        <!-- Standalone Page Header -->
        <div *ngIf="!isHomeSection" class="text-center mb-16">
          <h1 class="text-4xl md:text-6xl font-heading font-bold mb-4">ABOUT <span class="text-[#e10600]">US</span></h1>
          <div class="w-16 h-1 bg-[#e10600] mx-auto mb-6"></div>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg">We are Bravion Printers Ltd – Your trusted one-stop branding and printing partner in Kenya since July 2022.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 class="text-3xl font-heading font-bold mb-6">Our Story</h2>
            @for (paragraph of companyInfo.aboutText; track paragraph) {
              <p [ngClass]="isHomeSection ? 'text-gray-600' : 'text-gray-300'" class="leading-relaxed mb-4 last:mb-0">
                {{ paragraph }}
              </p>
            }
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div [ngClass]="isHomeSection ? 'bg-[#f5f5f3] border-gray-200 shadow-sm' : 'bg-[#111] border-white/5'" class="p-8 text-center border rounded-lg hover:border-[#e10600]/50 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(225,6,0,0.15)] transition-all duration-400 group cursor-pointer">
              <span class="text-4xl font-heading font-bold text-[#e10600] block mb-2 group-hover:scale-110 transition-transform duration-300">500+</span>
              <span class="text-xs font-bold tracking-widest uppercase group-hover:text-gray-300 transition-colors" [ngClass]="isHomeSection ? 'text-gray-500' : 'text-gray-500'">Projects</span>
            </div>
            <div [ngClass]="isHomeSection ? 'bg-[#f5f5f3] border-gray-200 shadow-sm' : 'bg-[#111] border-white/5'" class="p-8 text-center border rounded-lg hover:border-[#e10600]/50 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(225,6,0,0.15)] transition-all duration-400 group cursor-pointer">
              <span class="text-4xl font-heading font-bold text-[#e10600] block mb-2 group-hover:scale-110 transition-transform duration-300">200+</span>
              <span class="text-xs font-bold tracking-widest uppercase group-hover:text-gray-300 transition-colors" [ngClass]="isHomeSection ? 'text-gray-500' : 'text-gray-500'">Clients</span>
            </div>
            <div [ngClass]="isHomeSection ? 'bg-[#f5f5f3] border-gray-200 shadow-sm' : 'bg-[#111] border-white/5'" class="p-8 text-center border rounded-lg hover:border-[#e10600]/50 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(225,6,0,0.15)] transition-all duration-400 group cursor-pointer">
              <span class="text-4xl font-heading font-bold text-[#e10600] block mb-2 group-hover:scale-110 transition-transform duration-300">100%</span>
              <span class="text-xs font-bold tracking-widest uppercase group-hover:text-gray-300 transition-colors" [ngClass]="isHomeSection ? 'text-gray-500' : 'text-gray-500'">Quality</span>
            </div>
            <div [ngClass]="isHomeSection ? 'bg-[#f5f5f3] border-gray-200 shadow-sm' : 'bg-[#111] border-white/5'" class="p-8 text-center border rounded-lg hover:border-[#e10600]/50 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(225,6,0,0.15)] transition-all duration-400 group cursor-pointer">
              <span class="text-4xl font-heading font-bold text-[#e10600] block mb-2 group-hover:scale-110 transition-transform duration-300">24/7</span>
              <span class="text-xs font-bold tracking-widest uppercase group-hover:text-gray-300 transition-colors" [ngClass]="isHomeSection ? 'text-gray-500' : 'text-gray-500'">Support</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div class="bg-[#e10600] text-white p-10 rounded-xl shadow-lg transform hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(225,6,0,0.4)] transition-all duration-500 cursor-pointer">
            <h3 class="text-2xl font-heading font-bold mb-4 group-hover:text-[#e10600] transition-colors duration-300">Our Mission</h3>
            <p class="text-white-600">{{ companyInfo.mission }}</p>
          </div>
          <div class="bg-[#e10600] text-white p-10 rounded-xl shadow-lg transform hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(225,6,0,0.4)] transition-all duration-500 cursor-pointer">
            <h3 class="text-2xl font-heading font-bold mb-4">Our Vision</h3>
            <p class="text-white/90">{{ companyInfo.vision }}</p>
          </div>
           <div class="bg-[#e10600] text-white p-10 rounded-xl shadow-lg transform hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(225,6,0,0.4)] transition-all duration-500 cursor-pointer">
            <h3 class="text-2xl font-heading font-bold mb-4">Our Core Values</h3>
            <ul class="text-white-600 space-y-2 font-medium">
              @for (value of companyInfo.values; track value) {
                <li>✓ {{ value }}</li>
              }
            </ul>
          </div>
        </div>

        <!-- WHY CHOOSE US SECTION -->
        <div id="why-section" class="pt-16 pb-8 border-t border-gray-800" [ngClass]="isHomeSection ? 'border-gray-200' : 'border-gray-800'">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-5xl font-heading font-bold mb-4">WHY <span class="text-[#e10600]">CHOOSE US</span></h2>
            <div class="w-16 h-1 bg-[#e10600] mx-auto mb-6"></div>
            <p [ngClass]="isHomeSection ? 'text-gray-500' : 'text-gray-400'" class="text-sm max-w-xl mx-auto">We deliver complete branding solutions with unmatched quality, creativity, and reliability.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (item of whyChooseUs; track item.title; let i = $index) {
              <div [ngClass]="isHomeSection ? 'bg-white border-gray-100 shadow-sm' : 'bg-[#111] border-white/5'" class="p-8 border rounded-xl hover:shadow-2xl hover:border-[#e10600] transition-all duration-500 hover:-translate-y-3 group text-center cursor-pointer"
                   [class.anim-from-left]="i % 2 === 0"
                   [class.anim-from-right]="i % 2 !== 0"
                   [class.is-visible]="showWhy()"
                   [style.transition-delay]="(i * 80) + 'ms'">
                <div [ngClass]="isHomeSection ? 'bg-[#f9f9f9]' : 'bg-[#1a1a1a]'" class="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:bg-[#e10600] transition-colors duration-500 shadow-inner">
                  <span class="text-3xl group-hover:text-white transition-colors duration-500">{{ item.icon }}</span>
                </div>
                <h3 [ngClass]="isHomeSection ? 'text-[#0a0a0a]' : 'text-white'" class="font-heading font-bold text-lg mb-3 group-hover:text-[#e10600] transition-colors duration-300">{{ item.title }}</h3>
                <p [ngClass]="isHomeSection ? 'text-gray-500' : 'text-gray-400'" class="text-sm leading-relaxed">{{ item.desc }}</p>
              </div>
            }
          </div>
        </div>

      </div>
    </div>
  `
})
export class AboutComponent implements OnInit {
  @Input() isHomeSection: boolean = false;
  readonly companyInfo = COMPANY_INFO;

  readonly showWhy = signal(false);

  readonly whyChooseUs = [
    { icon: '⚡', title: 'Quick Turnaround', desc: 'Fast delivery without compromising on quality.' },
    { icon: '🏆', title: 'Professional Quality', desc: 'Premium materials and expert craftsmanship.' },
    { icon: '💰', title: 'Affordable Pricing', desc: 'Competitive rates for every budget.' },
    { icon: '🎨', title: 'Creative Designs', desc: 'Fresh, bold ideas that make brands stand out.' },
    { icon: '⚙️', title: 'Modern Equipment', desc: 'State-of-the-art printing and production tech.' },
    { icon: '🤝', title: 'Trusted Partner', desc: 'Long-term branding partner you can rely on.' }
  ];

  ngOnInit() {
    setTimeout(() => {
      this.observeSection('why-section', this.showWhy);
    }, 150);
  }

  private observeSection(id: string, signal: any) {
    if (typeof document === 'undefined') return;
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        signal.set(true);
      } else {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              signal.set(true);
              observer.disconnect();
            }
          });
        }, { threshold: 0.1 });
        observer.observe(el);
      }
    }
  }
}
