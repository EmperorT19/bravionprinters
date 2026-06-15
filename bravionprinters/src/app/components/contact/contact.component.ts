import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pt-24 pb-16 bg-[#f5f5f3] text-[#0a0a0a] min-h-screen flex flex-col transition-colors duration-500">
      <div class="px-8 md:px-16 flex-grow">
        <div class="max-w-7xl mx-auto">
          
          <div class="text-center mb-16">
            <h1 class="text-4xl md:text-6xl font-heading font-bold mb-4">CONTACT <span class="text-[#e10600]">US</span></h1>
            <div class="w-16 h-1 bg-[#e10600] mx-auto mb-6"></div>
            <p class="text-gray-600 max-w-2xl mx-auto text-lg">Have a project in mind? Let's discuss how we can elevate your brand.</p>
          </div>

          <div class="flex flex-col gap-10 mb-20">
            
            <!-- ====== CONTACT DETAILS ====== -->
            <div class="flex flex-col gap-10 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
              <div>
                <h3 class="text-2xl font-heading font-bold mb-4 text-[#0a0a0a]">Get In Touch</h3>
                <p class="text-gray-500 leading-relaxed text-sm">
                  We are always ready to partner with you on your next branding and printing project. Reach out to us via phone, email, or visit our office.
                </p>
              </div>

              <div class="flex items-start gap-5 group">
                <div class="w-12 h-12 rounded-full bg-[#f9f9f9] border border-gray-200 flex items-center justify-center text-[#e10600] group-hover:bg-[#e10600] group-hover:text-white transition-all duration-300 transform group-hover:scale-110 flex-shrink-0 shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <span class="block text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">Phone / WhatsApp</span>
                  <a href="tel:+254725725186" class="text-lg font-heading font-bold text-[#0a0a0a] hover:text-[#e10600] transition-colors">0725 725 186</a>
                </div>
              </div>

              <div class="flex items-start gap-5 group">
                <div class="w-12 h-12 rounded-full bg-[#f9f9f9] border border-gray-200 flex items-center justify-center text-[#e10600] group-hover:bg-[#e10600] group-hover:text-white transition-all duration-300 transform group-hover:scale-110 flex-shrink-0 shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <span class="block text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">Email Address</span>
                  <a href="mailto:info@braviongroup.co.ke" class="text-lg font-heading font-bold text-[#0a0a0a] hover:text-[#e10600] transition-colors break-all">info&#64;braviongroup.co.ke</a>
                </div>
              </div>

              <div class="flex items-start gap-5 group">
                <div class="w-12 h-12 rounded-full bg-[#f9f9f9] border border-gray-200 flex items-center justify-center text-[#e10600] group-hover:bg-[#e10600] group-hover:text-white transition-all duration-300 transform group-hover:scale-110 flex-shrink-0 shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <span class="block text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">Office Location</span>
                  <span class="text-base font-heading font-bold text-[#0a0a0a] block leading-snug">Bravion House, Kindaruma Road,<br/>Opposite Carrefour Supermarket,<br/>Rose Avenue Mall, Next to Listers Car Wash</span>
                </div>
              </div>
              <!-- ====== SOCIAL MEDIA ====== -->
              <div class="pt-6 border-t border-gray-100 mt-2 flex items-center gap-6">
                <span class="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Follow Us</span>
                <div class="flex gap-4">
                                      <a href="https://www.facebook.com/profile.php?id=61590481945221" target="_blank" rel="noopener" aria-label="Facebook"
                      class="w-10 h-10 rounded-full bg-[#f9f9f9] border border-gray-200 flex items-center justify-center text-[#0a0a0a] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                      onmouseover="this.style.background='#1877F2'; this.style.borderColor='#1877F2'; this.style.color='white'"
                      onmouseout="this.style.background='#f9f9f9'; this.style.borderColor='#e5e7eb'; this.style.color='#0a0a0a'">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>

                    <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="X (Twitter)"
                      class="w-10 h-10 rounded-full bg-[#f9f9f9] border border-gray-200 flex items-center justify-center text-[#0a0a0a] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                      onmouseover="this.style.background='#000000'; this.style.borderColor='#000000'; this.style.color='white'"
                      onmouseout="this.style.background='#f9f9f9'; this.style.borderColor='#e5e7eb'; this.style.color='#0a0a0a'">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>

                    <a href="https://www.instagram.com/bravion_printers/" target="_blank" rel="noopener" aria-label="Instagram"
                      class="w-10 h-10 rounded-full bg-[#f9f9f9] border border-gray-200 flex items-center justify-center text-[#0a0a0a] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                      onmouseover="this.style.background='#E1306C'; this.style.borderColor='#E1306C'; this.style.color='white'"
                      onmouseout="this.style.background='#f9f9f9'; this.style.borderColor='#e5e7eb'; this.style.color='#0a0a0a'">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>

                    <a href="https://www.tiktok.com/@bravion_printers?lang=en" target="_blank" rel="noopener" aria-label="TikTok"
                      class="w-10 h-10 rounded-full bg-[#f9f9f9] border border-gray-200 flex items-center justify-center text-[#0a0a0a] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                      onmouseover="this.style.background='#69C9D0'; this.style.borderColor='#69C9D0'; this.style.color='white'"
                      onmouseout="this.style.background='#f9f9f9'; this.style.borderColor='#e5e7eb'; this.style.color='#0a0a0a'">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                    </a>
                                    
                </div>
              </div>
            </div>

            <!-- ====== FORM SECTION ====== -->
            <div class="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
              
              <!-- Form Type Toggle -->
              <div class="flex justify-center mb-10 border-b border-gray-100">
                <button (click)="activeForm.set('general')" 
                        class="px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 border-b-2"
                        [class]="activeForm() === 'general' ? 'border-[#e10600] text-[#e10600]' : 'border-transparent text-gray-400 hover:text-[#0a0a0a]'">
                  General Inquiry
                </button>
                <button (click)="activeForm.set('quote')" 
                        class="px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 border-b-2"
                        [class]="activeForm() === 'quote' ? 'border-[#e10600] text-[#e10600]' : 'border-transparent text-gray-400 hover:text-[#0a0a0a]'">
                  Request a Quote
                </button>
              </div>

              @if (formSubmitted()) {
                <!-- Success Message -->
                <div class="p-10 bg-emerald-50/50 border border-emerald-100 rounded-2xl text-center max-w-lg mx-auto">
                  <div class="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="w-10 h-10">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 class="text-3xl font-heading font-bold text-[#0a0a0a] mb-4">Request Sent!</h3>
                  <p class="text-gray-600 text-base leading-relaxed mb-8">
                    Thank you for reaching out. We have received your details and will process your request shortly. 
                  </p>
                  <button (click)="formSubmitted.set(false)" class="text-sm font-bold tracking-widest text-[#e10600] uppercase hover:text-[#0a0a0a] transition-all transform hover:translate-x-1 inline-flex items-center gap-2">
                    Send another request <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </button>
                </div>
              } @else {
                
                <!-- ====== GENERAL INQUIRY FORM ====== -->
                @if (activeForm() === 'general') {
                  <form action="mailto:info@braviongroup.co.ke" method="POST" enctype="text/plain" (submit)="onSubmit()" class="flex flex-col gap-6 animate-fade-in">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div class="flex flex-col">
                        <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">Full Name</label>
                        <input type="text" name="Name" required class="bg-[#f9f9f9] border border-gray-200 rounded-lg px-4 py-3 text-[#0a0a0a] focus:outline-none focus:border-[#e10600] focus:ring-1 focus:ring-[#e10600]/20 transition-all shadow-sm" placeholder="John Doe">
                      </div>
                      <div class="flex flex-col">
                        <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">Phone Number</label>
                        <input type="tel" name="Phone" required class="bg-[#f9f9f9] border border-gray-200 rounded-lg px-4 py-3 text-[#0a0a0a] focus:outline-none focus:border-[#e10600] focus:ring-1 focus:ring-[#e10600]/20 transition-all shadow-sm" placeholder="0726 612 470">
                      </div>
                    </div>
                    <div class="flex flex-col">
                      <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">Email Address</label>
                      <input type="email" name="Email" required class="bg-[#f9f9f9] border border-gray-200 rounded-lg px-4 py-3 text-[#0a0a0a] focus:outline-none focus:border-[#e10600] focus:ring-1 focus:ring-[#e10600]/20 transition-all shadow-sm" placeholder="john@example.com">
                    </div>
                    <div class="flex flex-col mt-2">
                      <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">Message</label>
                      <textarea name="Message" required rows="5" class="bg-[#f9f9f9] border border-gray-200 rounded-lg px-4 py-3 text-[#0a0a0a] focus:outline-none focus:border-[#e10600] focus:ring-1 focus:ring-[#e10600]/20 transition-all resize-none shadow-sm" placeholder="How can we help you?"></textarea>
                    </div>
                    <div class="mt-6 text-center">
                      <button type="submit" class="submit-btn text-sm font-bold tracking-[0.2em] px-12 py-4 bg-[#e10600] text-white hover:bg-[#0a0a0a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 rounded-sm">
                        SEND MESSAGE
                      </button>
                    </div>
                  </form>
                }

                <!-- ====== DETAILED QUOTE FORM ====== -->
                @if (activeForm() === 'quote') {
                  <form action="mailto:info@braviongroup.co.ke" method="POST" enctype="text/plain" (submit)="onSubmit()" class="flex flex-col gap-8 animate-fade-in">
                    
                    <!-- Section 1: Contact Info -->
                    <div>
                      <h4 class="text-sm font-bold text-[#e10600] uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">1. Personal Information</h4>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="flex flex-col">
                          <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">Full Name</label>
                          <input type="text" name="Full_Name" class="form-input" placeholder="Your Name">
                        </div>
                        <div class="flex flex-col">
                          <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">Company Name</label>
                          <input type="text" name="Company_Name" class="form-input" placeholder="Your Company">
                        </div>
                        <div class="flex flex-col">
                          <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">Email</label>
                          <input type="email" name="Email" class="form-input" placeholder="john@example.com">
                        </div>
                        <div class="flex flex-col">
                          <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">Phone</label>
                          <input type="tel" name="Phone" class="form-input" placeholder="07xx xxx xxx">
                        </div>
                        <div class="flex flex-col md:col-span-2 mt-2">
                          <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">Preferred Contact Method</label>
                          <div class="flex gap-6">
                            <label class="flex items-center gap-2 cursor-pointer text-sm text-gray-600 hover:text-[#0a0a0a]">
                              <input type="radio" name="Contact_Method" value="Email" class="accent-[#e10600] w-4 h-4"> Email
                            </label>
                            <label class="flex items-center gap-2 cursor-pointer text-sm text-gray-600 hover:text-[#0a0a0a]">
                              <input type="radio" name="Contact_Method" value="Phone" class="accent-[#e10600] w-4 h-4"> Phone
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Section 2: Project Details -->
                    <div>
                      <h4 class="text-sm font-bold text-[#e10600] uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">2. Project Details</h4>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="flex flex-col md:col-span-2">
                          <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">Artwork Ready?</label>
                          <div class="flex gap-6">
                            <label class="flex items-center gap-2 cursor-pointer text-sm text-gray-600 hover:text-[#0a0a0a]">
                              <input type="radio" name="Artwork_Ready" value="Yes" class="accent-[#e10600] w-4 h-4"> Yes
                            </label>
                            <label class="flex items-center gap-2 cursor-pointer text-sm text-gray-600 hover:text-[#0a0a0a]">
                              <input type="radio" name="Artwork_Ready" value="No" class="accent-[#e10600] w-4 h-4"> No, I need design services
                            </label>
                          </div>
                        </div>
                        <div class="flex flex-col md:col-span-2">
                          <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">Signage Specifications (Brief Description)</label>
                          <textarea name="Signage_Specs" rows="3" class="form-input resize-none" placeholder="Describe what you need..."></textarea>
                        </div>
                        <div class="flex flex-col">
                          <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">Signage Purpose</label>
                          <select name="Signage_Purpose" class="form-input">
                            <option value="">Select Purpose</option>
                            <option value="Direction">Direction</option>
                            <option value="Promotion">Promotion</option>
                            <option value="Advertising">Advertising</option>
                            <option value="Safety">Safety</option>
                          </select>
                        </div>
                        <div class="flex flex-col">
                          <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">Type of Signage</label>
                          <select name="Signage_Type" class="form-input">
                            <option value="">Select Type</option>
                            <option value="Illuminated">Illuminated</option>
                            <option value="Non-Illuminated">Non-Illuminated</option>
                            <option value="Outdoor">Outdoor</option>
                            <option value="Indoor">Indoor</option>
                          </select>
                        </div>
                        <div class="flex flex-col">
                          <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">Quantity Required</label>
                          <input type="number" name="Quantity" class="form-input" placeholder="e.g. 2">
                        </div>
                        <div class="flex flex-col">
                          <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">Size Requirements</label>
                          <input type="text" name="Size" class="form-input" placeholder="e.g. 2m x 1m">
                        </div>
                        <div class="flex flex-col md:col-span-2">
                          <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">Preferred Materials</label>
                          <input type="text" name="Materials" class="form-input" placeholder="e.g. Acrylic, Metal, Perspex">
                        </div>
                      </div>
                    </div>

                    <!-- Section 3: Logistics & Deadlines -->
                    <div>
                      <h4 class="text-sm font-bold text-[#e10600] uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">3. Logistics & Deadlines</h4>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="flex flex-col">
                          <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">Delivery Site</label>
                          <input type="text" name="Delivery_Site" class="form-input" placeholder="City, Location">
                        </div>
                        <div class="flex flex-col">
                          <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">Installation Point</label>
                          <select name="Installation_Point" class="form-input" (change)="onInstallPointChange($event)">
                            <option value="">Select Point</option>
                            <option value="Ground">Ground</option>
                            <option value="1st Floor">1st Floor</option>
                            <option value="2nd Floor">2nd Floor</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        
                        @if (showOtherInstall()) {
                          <div class="flex flex-col md:col-span-2 animate-fade-in">
                            <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">Other Installation Point</label>
                            <input type="text" name="Other_Installation_Point" class="form-input" placeholder="Please specify">
                          </div>
                        }

                        <div class="flex flex-col md:col-span-2">
                          <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">Installation Requirements</label>
                          <textarea name="Install_Requirements" rows="2" class="form-input resize-none" placeholder="Any special instructions?"></textarea>
                        </div>
                        
                        <div class="flex flex-col">
                          <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">Preferred Completion Date</label>
                          <input type="date" name="Completion_Date" class="form-input">
                        </div>
                        <div class="flex flex-col">
                          <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">Specific Deadline (if any)</label>
                          <input type="text" name="Deadline" class="form-input" placeholder="Time or condition">
                        </div>
                      </div>
                    </div>

                    <!-- File Upload (Mailto limitation: only sends file name, but good for UI) -->
                    <div class="bg-[#f9f9f9] border-2 border-dashed border-gray-200 rounded-lg p-6 text-center hover:border-[#e10600]/40 transition-colors">
                      <label class="cursor-pointer flex flex-col items-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-8 h-8 text-gray-400 mb-2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
                        <span class="text-sm font-bold text-gray-600">Upload File / Artwork</span>
                        <span class="text-xs text-gray-400 mt-1">PDF, JPG, PNG, AI, CDR</span>
                        <input type="file" name="Artwork_File" class="hidden">
                      </label>
                    </div>

                    <div class="mt-6 text-center">
                      <button type="submit" class="submit-btn text-sm font-bold tracking-[0.2em] px-12 py-4 bg-[#e10600] text-white hover:bg-[#0a0a0a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 rounded-sm w-full md:w-auto">
                        REQUEST QUOTE
                      </button>
                      <p class="text-[10px] text-gray-400 mt-4 uppercase tracking-wider">This will open your email client to send the request securely.</p>
                    </div>
                  </form>
                }
              }
            </div>
          </div>
        </div>
      </div>

      <!-- ====== GOOGLE MAPS ====== -->
      <div class="w-full mt-16 px-8 md:px-16 pb-16">
        <div class="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d36.795185!3d-1.297524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnNTEuMSJTIDM2wrA0Nyc0Mi43IkU!5e0!3m2!1sen!2ske!4v1700000000000"
            width="100%"
            height="400"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Bravion Printers Location - Kilimani, Nairobi">
          </iframe>
        </div>
      </div>
  `,
  styles: [`
    .form-input {
      background-color: #f9f9f9;
      border: 1px solid #e5e7eb;
      border-radius: 0.5rem;
      padding: 0.75rem 1rem;
      color: #0a0a0a;
      font-size: 0.875rem;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
    }
    .form-input:focus {
      outline: none;
      border-color: #e10600;
      box-shadow: 0 0 0 2px rgba(225, 6, 0, 0.1);
      background-color: #ffffff;
    }
    .animate-fade-in {
      animation: fadeIn 0.4s ease forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class ContactComponent {
  readonly activeForm = signal<'general' | 'quote'>('quote');
  readonly formSubmitted = signal(false);
  readonly showOtherInstall = signal(false);

  onInstallPointChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.showOtherInstall.set(select.value === 'Other');
  }

  onSubmit() {
    // We let the native HTML <form action="mailto:..."> handle the actual submission logic.
    // We delay the success state slightly to ensure the browser captures the mailto action.
    setTimeout(() => {
      this.formSubmitted.set(true);
    }, 500);
  }
}
