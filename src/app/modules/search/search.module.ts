import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './pages/search/search.component';
import { FormFieldComponent } from 'src/app/shared/components/form-field/form-field.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchResultsCardComponent } from './components/search-results-card/search-results-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyConversionPipe } from 'src/app/shared/pipes/currency-conversion.pipe';

@NgModule({
  declarations: [SearchComponent, SearchResultsCardComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormFieldComponent,
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    CurrencyConversionPipe,
  ],
})
export class SearchModule {}
