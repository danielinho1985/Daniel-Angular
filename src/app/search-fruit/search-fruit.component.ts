import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Fruit {
  name: string;
  price: string;
  available: boolean;
}

@Component({
  selector: 'app-search-fruit',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  template: `
    <div class="box">
      <input [(ngModel)]="query" placeholder="Enter fruit name" />
      <button (click)="searchFruit()">Search</button>

      <div *ngIf="result">
        <h4>Response:</h4>
        <pre>{{ result | json }}</pre>
      </div>
    </div>
  `,
  styles: [`
    .box {
      margin-top: 2rem;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 0.5rem;
    }
    input {
      padding: 0.5rem;
      margin-right: 0.5rem;
      width: 200px;
    }
    button {
      padding: 0.5rem 1rem;
    }
  `]
})
export class SearchFruitComponent {
  query = '';
  result: Fruit | { error: string, details: any } | null = null;

  constructor(private http: HttpClient) {}

  searchFruit() {
    const url = `https://daniel-1.onrender.com/Fruit?FruitName=${this.query}`;
    this.http.get<Fruit>(url).subscribe({
      next: data => this.result = data,
      error: err => this.result = { error: 'Request failed', details: err }
    });
  }
}
