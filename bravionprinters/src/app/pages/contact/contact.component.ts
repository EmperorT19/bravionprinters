import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pt-24 pb-0 bg-[#0a0a0a] text-white min-h-screen flex flex-col">
      <div class="px-8 md:px-16 flex-grow">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h1 class="text-4xl md:text-6xl font-heading font-bold mb-4">CONTACT <span class="text-[#e10600]">US</span></h1>
            <div class="w-16 h-1 bg-[#e10600] mx-auto mb-6"></div>
            <p class="text-gray-400 max-w-2xl mx-auto text-lg">Have a project in mind? Let's discuss how we can elevate your brand.</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <!-- Contact Info -->
            <div class="flex flex-col gap-10">
              <div>
                <h3 class="text-2xl font-heading font-bold mb-6 text-white">Get In Touch</h3>
                <p class="text-gray-400 leading-relaxed mb-8">
                  We are always ready to partner with you on your next branding and printing project. Reach out to us via phone, email, or visit our office.
                </p>
              </div>

              <div class="flex items-start gap-6 group">
                <div class="w-14 h-14 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-[#e10600] group-hover:bg-[#e10600] group-hover:text-white transition-colors flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <span class="block text-xs font-bold tracking-widest text-gray-500 uppercase mb-1">Phone / WhatsApp</span>
                  <a href="tel:+254726612470" class="text-xl font-heading font-bold text-white hover:text-[#e10600] transition-colors">0726 612 470</a>
                </div>
              </div>

              <div class="flex items-start gap-6 group">
                <div class="w-14 h-14 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-[#e10600] group-hover:bg-[#e10600] group-hover:text-white transition-colors flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <span class="block text-xs font-bold tracking-widest text-gray-500 uppercase mb-1">Email Address</span>
                  <a href="mailto:info@bravionprinters.co.ke" class="text-xl font-heading font-bold text-white hover:text-[#e10600] transition-colors">info&#64;bravionprinters.co.ke</a>
                </div>
              </div>

              <div class="flex items-start gap-6 group">
                <div class="w-14 h-14 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-[#e10600] group-hover:bg-[#e10600] group-hover:text-white transition-colors flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <span class="block text-xs font-bold tracking-widest text-gray-500 uppercase mb-1">Office Location</span>
                  <span class="text-lg font-heading font-bold text-white block leading-snug">Kilimani, Nairobi<br/>Opp. Rose Avenue Center,<br/>Behind Coptic Mission Hospital</span>
                </div>
              </div>
            </div>

            <!-- Contact Form -->
            <div class="bg-[#111] border border-white/5 p-10 rounded-lg">
              <h3 class="text-2xl font-heading font-bold mb-8 text-white">Send a Message</h3>
              <form class="flex flex-col gap-6">
                <div class="flex flex-col">
                  <label class="text-xs font-bold tracking-widest text-gray-500 mb-2">YOUR NAME</label>
                  <input type="text" class="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-[#e10600] transition-colors" placeholder="John Doe">
                </div>
                <div class="flex flex-col">
                  <label class="text-xs font-bold tracking-widest text-gray-500 mb-2">EMAIL ADDRESS</label>
                  <input type="email" class="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-[#e10600] transition-colors" placeholder="john@example.com">
                </div>
                <div class="flex flex-col">
                  <label class="text-xs font-bold tracking-widest text-gray-500 mb-2">PHONE NUMBER</label>
                  <input type="tel" class="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-[#e10600] transition-colors" placeholder="0726 612 470">
                </div>
                <div class="flex flex-col mt-4">
                  <label class="text-xs font-bold tracking-widest text-gray-500 mb-2">MESSAGE</label>
                  <textarea rows="4" class="bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-[#e10600] transition-colors resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <div class="mt-6">
                  <button type="submit" class="w-full text-sm font-bold tracking-[0.2em] px-10 py-4 bg-[#e10600] text-white hover:bg-[#c00500] transition-colors rounded-sm">
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Google Maps Embed Placeholder -->
      <div class="w-full h-96 bg-[#1a1a1a] border-t border-white/10 relative mt-auto">
        <div class="absolute inset-0 flex items-center justify-center text-gray-500 font-heading font-bold text-xl uppercase tracking-widest">
          [ Google Maps Embed: Kilimani, Nairobi ]
        </div>
        <!-- Actual iframe will go here once coordinates are provided -->
      </div>
    </div>
  `
})
export class ContactComponent {}
