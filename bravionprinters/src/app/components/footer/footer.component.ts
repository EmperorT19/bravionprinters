import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="site-footer">
      <!-- Main Footer -->
      <div class="footer-main">
        <div class="footer-grid">
          <!-- Brand Column -->
          <div class="footer-col brand-col">
            <img src="/bravion_logo.png" alt="Bravion Printers" class="footer-logo" />
            <p class="footer-desc">
              Your trusted one-stop branding and printing company in Kenya.
              We design, we brand, you grow.
            </p>
            <div class="social-links">
              <a href="https://www.facebook.com/profile.php?id=61590481945221" target="_blank" rel="noopener" aria-label="Facebook"
                class="w-10 h-10 rounded-full bg-[#f9f9f9] border border-gray-200 flex items-center justify-center text-[#0a0a0a] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                onmouseover="this.style.background='#1877F2'; this.style.borderColor='#1877F2'; this.style.color='white'">
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

          <!-- Quick Links -->
          <div class="footer-col">
            <h4 class="footer-heading">QUICK LINKS</h4>
            <ul class="footer-links">
              <li><a routerLink="/">Home</a></li>
              <li><a routerLink="/about">About Us</a></li>
              <li><a routerLink="/services">Services</a></li>
              <li><a routerLink="/blog">Blog</a></li>
              <li><a routerLink="/contact">Contact</a></li>
            </ul>
          </div>

          <!-- Services -->
          <div class="footer-col">
            <h4 class="footer-heading">SERVICES</h4>
            <ul class="footer-links">
              <li><a routerLink="/design">Design Services</a></li>
              <li><a routerLink="/print">Print Services</a></li>
              <li><a routerLink="/brand">Brand Services</a></li>
              <li><a routerLink="/stationery">Stationery Services</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="footer-col">
            <h4 class="footer-heading">CONTACT US</h4>
            <div class="contact-items">
              <div class="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                <a href="tel:+254725725186">0725 725 186 </a>
              </div>
              <div class="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:info&#64;bravionprinters.co.ke">info&#64;bravionprinters.co.ke</a>
              </div>
              <div class="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Kilimani, Nairobi<br/>Opp. Rose Avenue Center,<br/>next to Listers Car wash</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <span>© {{ currentYear }} Bravion Printers Ltd. All Rights Reserved.</span>
        <span>www.bravionprinters.co.ke</span>
      </div>
    </footer>
  `,
  styles: [`
    .site-footer {
      background: #050505;
      color: #fff;
      border-top: 1px solid rgba(255,255,255,0.05);
    }
    .footer-main {
      max-width: 1400px;
      margin: 0 auto;
      padding: 4rem 2rem 3rem;
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
      gap: 3rem;
    }
    .footer-logo {
      height: 36px;
      width: auto;
      margin-bottom: 1rem;
    }
    .footer-desc {
      font-size: 0.82rem;
      color: rgba(255,255,255,0.5);
      line-height: 1.7;
      margin: 0 0 1.25rem;
    }
    .social-links {
      display: flex;
      gap: 0.75rem;
    }
    .social-links a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 50%;
      color: #0a0a0a;
      transition: all 0.25s ease;
    }
    .social-links a:hover {
      color: #fff;
      border-color: #e10600;
      background: #e10600;
      transform: translateY(-2px);
    }
    .footer-heading {
      font-family: 'Poppins', sans-serif;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      color: rgba(255,255,255,0.4);
      margin: 0 0 1.25rem;
    }
    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .footer-links li { margin-bottom: 0.6rem; }
    .footer-links a {
      font-size: 0.82rem;
      color: rgba(255,255,255,0.5);
      text-decoration: none;
      transition: color 0.2s ease, padding-left 0.2s ease;
    }
    .footer-links a:hover {
      color: #e10600;
      padding-left: 4px;
    }
    .contact-items { display: flex; flex-direction: column; gap: 1rem; }
    .contact-item {
      display: flex;
      gap: 0.75rem;
      align-items: flex-start;
      font-size: 0.82rem;
      color: rgba(255,255,255,0.5);
    }
    .contact-item svg {
      color: #e10600;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .contact-item a {
      color: rgba(255,255,255,0.5);
      text-decoration: none;
      transition: color 0.2s ease;
    }
    .contact-item a:hover { color: #fff; }
    .contact-item span { line-height: 1.6; }
    .footer-bottom {
      max-width: 1400px;
      margin: 0 auto;
      padding: 1.5rem 2rem;
      border-top: 1px solid rgba(255,255,255,0.06);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.72rem;
      color: rgba(255,255,255,0.3);
      font-weight: 600;
      letter-spacing: 0.1em;
      font-family: 'Poppins', sans-serif;
    }
    @media (max-width: 768px) {
      .footer-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      .footer-bottom {
        flex-direction: column;
        gap: 0.5rem;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
