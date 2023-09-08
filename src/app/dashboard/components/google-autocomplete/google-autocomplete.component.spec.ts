import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAutocompleteComponent } from './google-autocomplete.component';

describe('GoogleAutocompleteComponent', () => {
  let component: GoogleAutocompleteComponent;
  let fixture: ComponentFixture<GoogleAutocompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleAutocompleteComponent]
    });
    fixture = TestBed.createComponent(GoogleAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
