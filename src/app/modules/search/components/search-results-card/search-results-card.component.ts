import { Component, Input, OnInit } from '@angular/core';
import { JourneyStep } from '../../models/search.model';
import { CurrencyService } from 'src/app/shared/services/currency.service';
import { AlertsService } from 'src/app/shared/services/alerts.service';

@Component({
  selector: 'app-search-results-card',
  templateUrl: './search-results-card.component.html',
})
export class SearchResultsCardComponent implements OnInit {
  @Input({ required: true }) origin!: string;
  @Input({ required: true }) destination!: string;
  @Input({ required: true }) price!: number;
  @Input({ required: true }) flights: JourneyStep[] = [];

  public selectedCurrency!: string;

  constructor(
    private currencyService: CurrencyService,
    private alertsService: AlertsService
  ) {}

  ngOnInit(): void {
    this.currencyService.currency$.subscribe(currency => {
      this.selectedCurrency = currency;
    });
  }

  public bookFlight() {
    this.alertsService.bookFlight();
  }
}
