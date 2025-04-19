import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
 @Input() id!: number;
 @Input() name = 'Alex';
 @Input() age = 20;
 @Input() email = 'alex@gmail.com';
 @Input() isSelected = false;
 
 @Output() onSelected = new EventEmitter<number>()
 @Output() onToggleSelection = new EventEmitter<number>()

  handleClick() {
    this.onSelected.emit(this.id);
    this.onToggleSelection.emit(this.id);
  }

}
