import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Needed for ngModel
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-box',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ FormsModule must be added here
  templateUrl: './form-box.component.html',
  styleUrls: ['./form-box.component.css']
})
export class FormBoxComponent {
  input1: string = '';
  input2: string = '';

  constructor(private http: HttpClient) {}

  sendToBackend1() {
    this.http.post('https://google.com/endpoint1', { data: this.input1 })
      .subscribe(response => console.log('Response 1:', response));
  }

  sendToBackend2() {
    this.http.post('https://google.com/endpoint2', { data: this.input2 })
      .subscribe(response => console.log('Response 2:', response));
  }
}
