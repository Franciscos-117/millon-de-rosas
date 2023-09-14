import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

export interface PlaceSearchResult {
  address: string;
  location?: google.maps.LatLng;
  imageUrl?: string;
  iconUrl?: string;
  name?: string;
  place_id?: string,
  url?: string
}



@Component({
  selector: 'google-autocomplete',
  styleUrls: ['./google-autocomplete.component.css'],
  template: `
    <!-- <mat-form-field appearance="outline"> -->
      <p class="text-secondary">Direccion</p>
      <input [value]="value" placeholder="Direccion..." #inputField class="form-control" name="google_places_ac"/>
    <!-- </mat-form-field> -->
  `,
})
export class GoogleAutocompleteComponent implements OnInit {

  @ViewChild('inputField')
  inputField!: ElementRef;

  @Input() placeholder = 'Enter address...';

  @Input() value = '';

  @Output() placeChanged = new EventEmitter<PlaceSearchResult>();

  autocomplete: google.maps.places.Autocomplete | undefined;

  listener: any;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.inputField.nativeElement, {
        componentRestrictions: { country: 'MX',  },
      }
    );
    // console.log('autocompleee ->', this.autocomplete);

    this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete?.getPlace();
      // console.log('lugar we ->', place);
      const result: PlaceSearchResult = {
        address: this.inputField.nativeElement.value,
        name: place?.name,
        location: place?.geometry?.location,
        iconUrl: place?.icon,
        place_id: place?.place_id,
        url: place?.url,
      };

      this.placeChanged.emit(result);
    });
  }

  ngOnDestroy() {
    if (this.autocomplete) {
      google.maps.event.clearInstanceListeners(this.autocomplete);
    }
  }



}
