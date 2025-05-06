
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
//import { FormBoxComponent } from './form-box/form-box.component';
import { SearchFruitComponent } from './search-fruit/search-fruit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  //imports: [HeaderComponent, FormBoxComponent],
  imports: [HeaderComponent,RouterModule,SearchFruitComponent  ],
  template: `
     <app-header></app-header>
  <main style="padding: 1rem;">
    <router-outlet></router-outlet>
    <app-search-fruit></app-search-fruit>
  </main>
  `
})
export class AppComponent {}