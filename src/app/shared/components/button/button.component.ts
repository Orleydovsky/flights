import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input({ required: true }) text!: string;
  @Output() action = new EventEmitter<void>();

  public emitAction() {
    this.action.emit();
  }
}
