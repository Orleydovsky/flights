import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConversion',
  standalone: true,
})
export class CurrencyConversionPipe implements PipeTransform {
  transform(value: number, currencyCode: string = 'USD'): string {
    const conversionFactors: { [currencyCode: string]: number } = {
      USD: 1,
      COP: 1 * 4114,
      MXN: 1 * 18.1,
    };

    if (conversionFactors[currencyCode] !== undefined) {
      const convertedValue = value * conversionFactors[currencyCode];
      return `${currencyCode} ${convertedValue.toFixed(2)}`;
    } else {
      return `USD ${value.toFixed(2)}`;
    }
  }
}
