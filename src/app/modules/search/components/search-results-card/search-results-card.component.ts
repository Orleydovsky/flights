import { Component, Input } from '@angular/core';
import { JourneyStep } from '../../models/search.model';

@Component({
  selector: 'app-search-results-card',
  templateUrl: './search-results-card.component.html',
})
export class SearchResultsCardComponent {
  @Input({ required: true }) origin!: string;
  @Input({ required: true }) destination!: string;
  @Input({ required: true }) price!: number;
  @Input({ required: true }) flights: JourneyStep[] = [];
}
