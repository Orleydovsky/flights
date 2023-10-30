import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Flight, Journey, JourneyStep } from '../../models/search.model';
import { SearchService } from '../../services/search.service';
import { AlertsService } from 'src/app/shared/services/alerts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  public flights: Flight[] = [];
  public journey: Journey | null = null;

  public searchFlightForm: FormGroup = this.fb.group({
    departureStation: [
      '',
      Validators.compose([Validators.required, Validators.maxLength(3)]),
    ],
    arrivalStation: [
      '',
      Validators.compose([Validators.required, Validators.maxLength(3)]),
    ],
  });

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService,
    private alertsService: AlertsService
  ) {}

  ngOnInit(): void {
    this.getFlights();
  }

  public getFlights() {
    this.searchService.getFlights().subscribe({
      next: flights => (this.flights = flights),
      error: () => {
        this.alertsService.genericError();
      },
    });
  }

  public getJourney() {
    if (this.searchFlightForm.invalid) {
      this.alertsService.noOriginOrDestination();
      return;
    }

    const { departureStation, arrivalStation } = this.searchFlightForm.value;

    if (departureStation === arrivalStation) {
      this.alertsService.sameOriginAndDestination();
      return;
    }

    const flightPath = this.searchService.getFlightPath(
      this.flights,
      departureStation,
      arrivalStation
    );

    if (flightPath?.length) {
      const JourneySteps = this.searchService.getJourneySteps(flightPath);

      const totalPrice = this.searchService.getTotalPrice(JourneySteps);

      this.journey = {
        origin: departureStation,
        destination: arrivalStation,
        price: totalPrice,
        flights: JourneySteps,
      };
    }
  }

  public resetSearchFlightForm() {
    this.searchFlightForm.reset();
  }
}
