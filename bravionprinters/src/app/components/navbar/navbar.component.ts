import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled()">
      <div class="nav-inner">
        <!-- Logo -->
        <a routerLink="/" class="nav-logo">
          <img src="bravion_logo.png" alt="Bravion Printers Ltd" class="logo-img" />
        </a>

        <!-- Desktop Nav -->
        <ul class="nav-links">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
          <li><a routerLink="/about" routerLinkActive="active">About</a></li>
          <li class="has-dropdown" (mouseenter)="showDropdown.set(true)" (mouseleave)="showDropdown.set(false)">
            <a routerLink="/services" routerLinkActive="active">Services <span class="chevron">▾</span></a>
            <ul class="dropdown" [class.dropdown-open]="showDropdown()">
              <li><a routerLink="/design" routerLinkActive="active">Design Services</a></li>
              <li><a routerLink="/print" routerLinkActive="active">Print Services</a></li>
              <li><a routerLink="/brand" routerLinkActive="active">Brand Services</a></li>
              <li><a routerLink="/stationery" routerLinkActive="active">Stationery Services</a></li>
            </ul>
          </li>
          <li><a routerLink="/clients" routerLinkActive="active">Clients</a></li>
          <li><a routerLink="/blog" routerLinkActive="active">Blog</a></li>
          <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
        </ul>

        <!-- CTA -->
        <a routerLink="/contact" class="nav-cta">Get a Quote</a>

        <!-- Mobile Toggle -->
        <button class="mobile-toggle" (click)="mobileOpen.set(!mobileOpen())" [attr.aria-label]="'Toggle menu'">
          <span class="bar" [class.bar-open]="mobileOpen()"></span>
          <span class="bar" [class.bar-open]="mobileOpen()"></span>
          <span class="bar" [class.bar-open]="mobileOpen()"></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div class="mobile-menu" [class.mobile-menu-open]="mobileOpen()">
        <a routerLink="/" (click)="mobileOpen.set(false)">Home</a>
        <a routerLink="/about" (click)="mobileOpen.set(false)">About</a>
        <a routerLink="/services" (click)="mobileOpen.set(false)">Services</a>
        <div class="px-6 py-2 text-[10px] font-bold tracking-widest text-[#e10600] uppercase mt-2">Our Services</div>
        <a routerLink="/design" (click)="mobileOpen.set(false)" class="sub-link">↳ Design Services</a>
        <a routerLink="/print" (click)="mobileOpen.set(false)" class="sub-link">↳ Print Services</a>
        <a routerLink="/brand" (click)="mobileOpen.set(false)" class="sub-link">↳ Brand Services</a>
        <a routerLink="/stationery" (click)="mobileOpen.set(false)" class="sub-link">↳ Stationery Services</a>
        <a routerLink="/clients" (click)="mobileOpen.set(false)">Clients</a>
        <a routerLink="/blog" (click)="mobileOpen.set(false)">Blog</a>
        <a routerLink="/contact" (click)="mobileOpen.set(false)">Contact</a>
        <a routerLink="/contact" (click)="mobileOpen.set(false)" class="mobile-cta">Get a Quote →</a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(10, 10, 10, 0.85);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255,255,255,0.05);
      transition: background 0.3s ease, box-shadow 0.3s ease;
    }
    .navbar.scrolled {
      background: rgba(5, 5, 5, 0.98);
      box-shadow: 0 4px 30px rgba(0,0,0,0.4);
    }
    .nav-inner {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
      height: 72px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .nav-logo { display: flex; align-items: center; text-decoration: none; }
    .logo-img {
      height: 40px;
      width: auto;
      object-fit: contain;
    }
    .nav-links {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 0.25rem;
    }
    .nav-links > li > a {
      display: block;
      padding: 0.5rem 1rem;
      font-family: 'Poppins', sans-serif;
      font-size: 0.8rem;
      font-weight: 500;
      letter-spacing: 0.05em;
      color: rgba(255,255,255,0.7);
      text-decoration: none;
      text-transform: uppercase;
      transition: color 0.2s ease;
      white-space: nowrap;
    }
    .nav-links > li > a:hover,
    .nav-links > li > a.active {
      color: #e10600;
    }
    .chevron { font-size: 0.65rem; margin-left: 2px; }
    .has-dropdown { position: relative; }
    .dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      background: #111;
      border: 1px solid rgba(255,255,255,0.08);
      min-width: 240px;
      padding: 0.5rem 0;
      list-style: none;
      opacity: 0;
      visibility: hidden;
      transform: translateY(8px);
      transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease;
      box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    }
    .dropdown-open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    .dropdown li a {
      display: block;
      padding: 0.5rem 1.5rem;
      font-family: 'Open Sans', sans-serif;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.6);
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .dropdown li a:hover {
      color: #fff;
      background: rgba(225,6,0,0.1);
      padding-left: 2rem;
    }
    .nav-cta {
      font-family: 'Poppins', sans-serif;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #fff;
      background: #e10600;
      padding: 0.6rem 1.5rem;
      text-decoration: none;
      clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
      transition: background 0.2s ease, transform 0.2s ease;
      white-space: nowrap;
    }
    .nav-cta:hover {
      background: #c00500;
      transform: scale(1.05) translateY(-1px);
      box-shadow: 0 8px 20px rgba(225,6,0,0.4);
    }
    .mobile-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
    }
    .bar {
      width: 24px;
      height: 2px;
      background: #fff;
      transition: all 0.3s ease;
    }
    .bar-open:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
    .bar-open:nth-child(2) { opacity: 0; }
    .bar-open:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
    .mobile-menu {
      display: none;
      flex-direction: column;
      background: #0a0a0a;
      padding: 1rem 2rem 2rem;
      border-top: 1px solid rgba(255,255,255,0.05);
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s ease, padding 0.4s ease;
    }
    .mobile-menu-open {
      max-height: 600px;
      overflow-y: auto;
    }
    .mobile-menu a {
      display: block;
      padding: 0.75rem 0;
      font-family: 'Poppins', sans-serif;
      font-size: 0.85rem;
      font-weight: 500;
      color: rgba(255,255,255,0.7);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border-bottom: 1px solid rgba(255,255,255,0.04);
      transition: color 0.2s ease;
    }
    .mobile-menu a:hover { color: #e10600; }
    .mobile-menu .sub-link {
      padding-left: 1.5rem;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.45);
      text-transform: none;
    }
    .mobile-cta {
      margin-top: 1rem;
      background: #e10600 !important;
      color: #fff !important;
      text-align: center;
      padding: 0.8rem !important;
      font-weight: 600 !important;
      border: none !important;
    }
    @media (max-width: 1024px) {
      .nav-links, .nav-cta { display: none; }
      .mobile-toggle { display: flex; }
      .mobile-menu { display: flex; }
    }
  `]
})
export class NavbarComponent {
  readonly isScrolled = signal(false);
  readonly showDropdown = signal(false);
  readonly mobileOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }
}
