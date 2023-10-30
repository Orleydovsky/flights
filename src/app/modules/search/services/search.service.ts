import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import {
  Flight,
  GetFlightsResponse,
  JourneyStep,
} from '../models/search.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getFlights() {
    return this.http.get<GetFlightsResponse>(this.apiUrl);
  }

  public getFlightPath(
    flights: Flight[],
    departureStation: string,
    arrivalStation: string
  ): Flight[] | null {
    debugger;
    const visitedStations = new Set<string>();

    function dfs(
      currentStation: string,
      currentRoute: Flight[]
    ): Flight[] | null {
      if (currentStation === arrivalStation) {
        return currentRoute;
      }

      for (const flight of flights) {
        if (
          flight.departureStation === currentStation &&
          !visitedStations.has(flight.arrivalStation)
        ) {
          const newRoute = [...currentRoute, flight];
          visitedStations.add(flight.arrivalStation);

          const result = dfs(flight.arrivalStation, newRoute);
          if (result) {
            return result;
          }

          visitedStations.delete(flight.arrivalStation);
        }
      }

      return null;
    }

    return dfs(departureStation, []);
  }

  public getJourneySteps = (flights: Flight[]) => {
    return flights.map(
      ({
        arrivalStation: destination,
        departureStation: origin,
        flightCarrier,
        flightNumber,
        price,
      }) => {
        return {
          origin,
          destination,
          price,
          transport: {
            flightCarrier,
            flightNumber,
          },
        };
      }
    );
  };

  public getTotalPrice(flights: JourneyStep[]) {
    return flights.reduce(
      (accumulator, flight) => accumulator + flight.price,
      0
    );
  }
}
