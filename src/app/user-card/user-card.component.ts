import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
 @Input() name = 'Alex';
 @Input() age = 20;
 @Input() email = 'alex@gmail.com';
 
 @Output() onSelected = new EventEmitter<string>()

  handleClick() {
    this.onSelected.emit(this.name);
  }

}
