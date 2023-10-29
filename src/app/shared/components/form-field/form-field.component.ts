import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatInputModule, MatFormFieldModule],
  templateUrl: './form-field.component.html',
})
export class FormFieldComponent {
  @Input({ required: true }) placeholder!: string;
  @Input({ required: true }) label!: string;
  @Input() icon!: string;
}
