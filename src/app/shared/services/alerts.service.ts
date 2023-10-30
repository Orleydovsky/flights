import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  constructor(private snackBar: MatSnackBar) {}

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  public sameOriginAndDestination() {
    this.openSnackBar(
      'Please make sure that the origin and the destination are not the same',
      'else'
    );
  }
  public noOriginOrDestination() {
    this.openSnackBar(
      'Oops! Make sure you pick both an origin and a destination.',
      'Got it'
    );
  }

  public genericError() {
    this.openSnackBar('There was an error! Please try later', 'Got it');
  }

  public noFlights() {
    this.openSnackBar(
      'There are no available flights for the selected route',
      'Got it'
    );
  }

  public bookFlight() {
    this.openSnackBar(
      'You have successfully booked this flight',
      'Email me this'
    );
  }
}
