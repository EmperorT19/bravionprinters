import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <h1>Design Services</h1>
      <p>Content for Design Services will go here.</p>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 4rem 2rem;
      min-height: 80vh;
    }
  `]
})
export class DesignComponent {}
