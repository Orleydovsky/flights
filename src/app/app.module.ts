import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { LogoComponent } from './shared/components/logo/logo.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CurrencySelectComponent } from './shared/components/currency-select/currency-select.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    LogoComponent,
    HttpClientModule,
    MatSnackBarModule,
    CurrencySelectComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
