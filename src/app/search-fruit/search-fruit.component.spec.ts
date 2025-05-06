import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFruitComponent } from './search-fruit.component';

describe('SearchFruitComponent', () => {
  let component: SearchFruitComponent;
  let fixture: ComponentFixture<SearchFruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchFruitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
