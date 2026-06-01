import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent) },
  { path: 'services', loadComponent: () => import('./components/services/services.component').then(m => m.ServicesComponent) },
  { path: 'portfolio', loadComponent: () => import('./components/portfolio/portfolio.component').then(m => m.PortfolioComponent) },
  { path: 'clients', loadComponent: () => import('./components/clients/clients.component').then(m => m.ClientsComponent) },
  { path: 'blog', loadComponent: () => import('./components/blog/blog.component').then(m => m.BlogComponent) },
  { path: 'contact', loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent) },
  { path: 'design', loadComponent: () => import('./pages/design/design.component').then(m => m.DesignComponent) },
  { path: 'print', loadComponent: () => import('./pages/print/print.component').then(m => m.PrintComponent) },
  { path: 'stationery', loadComponent: () => import('./pages/stationery/stationery.component').then(m => m.StationeryComponent) },
  { path: 'brand', loadComponent: () => import('./pages/brand/brand.component').then(m => m.BrandComponent) },
  
  // Previous sub-services
  { path: 'vehicle-branding', loadComponent: () => import('./components/vehicle-branding/vehicle-branding.component').then(m => m.VehicleBrandingComponent) },
  { path: 'signage-branding', loadComponent: () => import('./components/signage-branding/signage-branding.component').then(m => m.SignageBrandingComponent) },
  { path: 'corporate-branding', loadComponent: () => import('./components/corporate-branding/corporate-branding.component').then(m => m.CorporateBrandingComponent) },
  { path: 'office-branding', loadComponent: () => import('./components/office-branding/office-branding.component').then(m => m.OfficeBrandingComponent) },
  { path: 'event-branding', loadComponent: () => import('./components/event-branding/event-branding.component').then(m => m.EventBrandingComponent) },
  { path: 'digital-design', loadComponent: () => import('./components/digital-design/digital-design.component').then(m => m.DigitalDesignComponent) },
  { path: 'printing-stationery', loadComponent: () => import('./components/printing-stationery/printing-stationery.component').then(m => m.PrintingStationeryComponent) },
  { path: 'services/:id', loadComponent: () => import('./components/service-detail/service-detail.component').then(m => m.ServiceDetailComponent) },

  { path: '**', redirectTo: '' }
];
