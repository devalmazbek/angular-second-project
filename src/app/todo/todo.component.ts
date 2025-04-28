import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() id!: number;
  @Input() title = '';
  @Input() completed = false;
  
  
  @Output() onCompletedClick = new EventEmitter<number>();


  handleClick() {
    this.onCompletedClick.emit(this.id);
  }

}
