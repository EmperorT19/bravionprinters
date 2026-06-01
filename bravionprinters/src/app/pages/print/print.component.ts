import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-print',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <h1>Print Services</h1>
      <p>Content for Print Services will go here.</p>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 4rem 2rem;
      min-height: 80vh;
    }
  `]
})
export class PrintComponent {}
