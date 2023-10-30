import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CurrencyService } from '../../services/currency.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currency-select',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './currency-select.component.html',
})
export class CurrencySelectComponent {
  public currencies = ['MXN', 'COP', 'USD'];
  public selectedCurrency!: string;

  constructor(private currencyService: CurrencyService) {
    this.currencyService.currency$.subscribe(currency => {
      this.selectedCurrency = currency;
    });
  }

  updateCurrency() {
    this.currencyService.setCurrency(this.selectedCurrency);
  }
}
