import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenPipe } from '../shorten.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, ShortenPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {

  @Input() id!: number;
  @Input() name = '';
  @Input() price = 0;
  @Input() description = 'test';
  @Input() clickCount = 0;
  @Input() isSelected = false;
  @Input() highlighted = false;

  @Output() onSelected = new EventEmitter<number>();
  @Output() onDelete = new EventEmitter<number>();
  @Output() onClickCount = new EventEmitter<number>();
  @Output() onAddProduct = new EventEmitter<{}>();
  @Output() onPickRandomProduct = new EventEmitter<number>()

  handleClick() {
    this.onSelected.emit(this.id);
    this.onClickCount.emit(this.id);
    this.onPickRandomProduct.emit(this.id);
  }

  handleDeleteClick() {
    this.onDelete.emit(this.id);
  }

  handleAddProduct() {
    let id = 10;
    const product = {} 
  }



}
