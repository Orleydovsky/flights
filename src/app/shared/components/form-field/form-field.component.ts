import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NoNumberInputDirective } from '../../directives/no-number-input.directive';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    NoNumberInputDirective,
  ],
  templateUrl: './form-field.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldComponent),
      multi: true,
    },
  ],
})
export class FormFieldComponent implements ControlValueAccessor {
  @Input({ required: true }) placeholder!: string;
  @Input({ required: true }) label!: string;
  @Input({ required: true }) maxlength!: number;
  @Input() icon!: string;

  public isDisabled = false;
  public value!: string;

  public writeValue(value: string): void {
    this.value = value.toUpperCase();
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = (newVal: string) => {
      this.value = newVal.toUpperCase();
      fn(this.value);
    };
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public onChange: (value: string) => void = () => {};

  public onTouched: () => void = () => {};
}
