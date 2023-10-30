import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoNumberInput]',
  standalone: true,
})
export class NoNumberInputDirective {
  @HostListener('input', ['$event'])
  onInput(event: InputEvent): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    const newValue = value.replace(/[^a-zA-Z\s]/g, '');
    if (newValue !== value) {
      inputElement.value = newValue;
      event.stopPropagation();
    }
  }
}
