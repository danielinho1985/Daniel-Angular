
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SearchFruitComponent } from './search-fruit/search-fruit.component';
import { FruitDropdownComponent } from './fruit-dropdown/fruit-dropdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  //imports: [HeaderComponent, FormBoxComponent],
  imports: [HeaderComponent,RouterModule,SearchFruitComponent,FruitDropdownComponent  ],
  template: `
     <app-header></app-header>
  <main style="padding: 1rem;">
    <router-outlet></router-outlet>
    <app-fruit-dropdown></app-fruit-dropdown>
   <!--<app-search-fruit></app-search-fruit> -->
  </main>
  `
})

export class AppComponent {
  title = 'danieltestangularapp';
}




