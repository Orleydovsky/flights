export interface Flight {
  departureStation: string;
  arrivalStation: string;
  flightCarrier: FlightCarrier;
  flightNumber: string;
  price: number;
}

export type GetFlightsResponse = Flight[];

export enum FlightCarrier {
  Co = 'CO',
  Es = 'ES',
  MX = 'MX',
}

export interface JourneyStep {
  origin: string;
  destination: string;
  price: number;
  transport: Transport;
}

export interface Transport {
  flightCarrier: string;
  flightNumber: string;
}

export interface Journey {
  origin: string;
  destination: string;
  price: number;
  flights: JourneyStep[];
}
