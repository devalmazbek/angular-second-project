import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ CommonModule, FormsModule,  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  name: string = '';
  price: number = 0;
  description: string = '';
  highlighted: boolean = false;
  clickCount: number = 0;

  @Output() onAddProduct = new EventEmitter<any>();

  submitForm() {
    if(this.name && this.price) {
      const newProduct = {
        id: Date.now(),
        name: this.name,
        price: this.price,
        description: this.description,
        highlighted: this.highlighted,
        clickCount: this.clickCount,
      }

      this.onAddProduct.emit(newProduct);
    }
  }

}
