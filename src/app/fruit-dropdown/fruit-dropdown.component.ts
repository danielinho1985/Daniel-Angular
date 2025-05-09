// fruit-dropdown.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule], // Essential imports
  selector: 'app-fruit-dropdown',
  template: `
    <div class="fruit-dropdown-container">
      <h2>Catalogo de Frutas</h2>
      
      <select [(ngModel)]="selectedFruit">
        <option value="" disabled selected>Elige una fruta</option>
        <option *ngFor="let fruit of fruits" [value]="fruit">
          {{ fruit }}
        </option>
      </select>
      <br/>
      <br/>
      <div class="fruitprice" *ngIf="selectedFruit">
      {{ getFruitResponse() }}
      </div>
    </div>
  `,
  styles: [`
    .fruit-dropdown-container {
      font-family: Arial, sans-serif;
      max-width: 300px;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      background-color:rgb(252, 247, 247);
      color: #070707 !important;
    }
    h2 {
    color: #070707 !important;
    margin-bottom: 15px;
  }
  .fruitprice {
    color: #070707 !important;
    
  }
    /* ... other styles ... */
  `]
})
export class FruitDropdownComponent {
  fruits: string[] = ['Manzana', 'Banana', 'Naranja', 'Mango', 'Fresa'];
  selectedFruit: string = '';

   // Hardcoded responses for each fruit
   private fruitResponses: {[key: string]: string} = {
    'Manzana': 'su precio es de $50.50 x kilo',
    'Banana': 'su precio es de $20.99 x kilo',
    'Naranja': 'su precio es de $11.50 x kilo',
    'Mango': 'su precio es de $18.50 x kilo',
    'Fresa': 'su precio es de $40.00 x kilo'
  };

  onFruitSelected() {
    console.log(`Selected fruit: ${this.selectedFruit}`);
    // You can add additional logic here
  }

  getFruitResponse(): string {
    return this.fruitResponses[this.selectedFruit] || 
           `You selected ${this.selectedFruit}. It's delicious!`;
  }

  getResponseClass(): string {
    return `${this.selectedFruit.toLowerCase()}-response` || 'default-response';
  }
}