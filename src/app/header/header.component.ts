import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
    <header class="header">
      <div class="logo">🍆 Fruteria La Michoacana 🍆</div>
      <nav class="menu">
  <a routerLink="/" routerLinkActive="active" class="menu-item">Home</a>
  <a routerLink="/about" routerLinkActive="active" class="menu-item">About</a>
  <a routerLink="/contact" routerLinkActive="active" class="menu-item">Contact</a>
</nav>

    </header>
  `,
  styles: [`
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background:rgb(57, 0, 76);
      color: white;
    }
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }
    .menu {
      display: flex;
      gap: 1rem;
    }
    .menu-item {
      color: white;
      text-decoration: none;
      font-weight: 500;
    }
    .menu-item:hover {
      text-decoration: underline;
    }
  `]
})
export class HeaderComponent {}

