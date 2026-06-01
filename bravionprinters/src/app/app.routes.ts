import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'brand', pathMatch: 'full' },
  { path: 'design', loadComponent: () => import('./pages/design/design.component').then(m => m.DesignComponent) },
  { path: 'print', loadComponent: () => import('./pages/print/print.component').then(m => m.PrintComponent) },
  { path: 'stationery', loadComponent: () => import('./pages/stationery/stationery.component').then(m => m.StationeryComponent) },
  { path: 'brand', loadComponent: () => import('./pages/brand/brand.component').then(m => m.BrandComponent) },
  { path: '**', redirectTo: 'brand' }
];
