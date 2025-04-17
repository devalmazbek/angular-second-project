import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {

  @Input() id!: number;
  @Input() name = '';
  @Input() price = 0;
  @Input() description = 'test';
  @Input() isSelected = false;
  @Input() highlighted = false;

  @Output() onSelected = new EventEmitter<number>();
  @Output() onDelete = new EventEmitter<number>();

  handleClick() {
    this.onSelected.emit(this.id);
  }

  handleDeleteClick() {
    this.onDelete.emit(this.id);
  }


}
