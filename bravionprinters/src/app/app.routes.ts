import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent) },
  { path: 'services', loadComponent: () => import('./components/services/services.component').then(m => m.ServicesComponent) },
  { path: 'clients', loadComponent: () => import('./components/clients/clients.component').then(m => m.ClientsComponent) },
  { path: 'blog', loadComponent: () => import('./components/blog/blog.component').then(m => m.BlogComponent) },
  { path: 'contact', loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent) },
  { path: 'design', loadComponent: () => import('./pages/design/design.component').then(m => m.DesignComponent) },
  { path: 'print', loadComponent: () => import('./pages/print/print.component').then(m => m.PrintComponent) },
  { path: 'stationery', loadComponent: () => import('./pages/stationery/stationery.component').then(m => m.StationeryComponent) },
  { path: 'brand', loadComponent: () => import('./pages/brand/brand.component').then(m => m.BrandComponent) },
  
  // Redirects for old sub-services to new consolidated pages
  { path: 'digital-design', redirectTo: 'design', pathMatch: 'full' },
  { path: 'printing-stationery', redirectTo: 'print', pathMatch: 'full' },
  { path: 'vehicle-branding', redirectTo: 'brand', pathMatch: 'full' },
  { path: 'signage-branding', redirectTo: 'brand', pathMatch: 'full' },
  { path: 'corporate-branding', redirectTo: 'brand', pathMatch: 'full' },
  { path: 'office-branding', redirectTo: 'brand', pathMatch: 'full' },
  { path: 'event-branding', redirectTo: 'brand', pathMatch: 'full' },
  { path: 'services/:id', redirectTo: 'services', pathMatch: 'full' },

  { path: '**', redirectTo: '' }
];

