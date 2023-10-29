import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  public searchFlightForm: FormGroup = this.fb.group({
    currentStation: [
      '',
      Validators.compose([Validators.required, Validators.maxLength(3)]),
    ],
    arrivalStation: [
      '',
      Validators.compose([Validators.required, Validators.maxLength(3)]),
    ],
  });

  constructor(private fb: FormBuilder) {}

  public searchFlight() {
    console.log(
      '🚀 ~ file: search.component.ts:26 ~ SearchComponent ~ searchFlight ~ this.searchFlightForm.value:',
      this.searchFlightForm.value
    );
  }
}
