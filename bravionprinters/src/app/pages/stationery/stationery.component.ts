import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stationery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <h1>Stationery Services</h1>
      <p>Content for Stationery Services will go here.</p>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 4rem 2rem;
      min-height: 80vh;
    }
  `]
})
export class StationeryComponent {}
