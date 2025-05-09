import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitDropdownComponent } from './fruit-dropdown.component';

describe('FruitDropdownComponent', () => {
  let component: FruitDropdownComponent;
  let fixture: ComponentFixture<FruitDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
