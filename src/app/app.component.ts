import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HeaderComponent, UserCardComponent, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-project';
  isSelected = false;
  highlightedAll = false;

  selectedProductId: number | null = null;

  users = [
    { id: 1, name: 'Алия', age: 25, email: 'aliya@example.com' },
    { id: 2, name: 'Бакай', age: 32, email: 'bakai@example.com' },
    { id: 3, name: 'Динара', age: 28, email: 'dinara@example.com' }
  ];

  products = [
    { id: 101, name: 'MacBook Air', price: 1299, description: '13-inch laptop from Apple', highlighted: false },
    { id: 102, name: 'Dell XPS 15', price: 1499, description: 'Powerful Windows laptop', highlighted: false },
    { id: 103, name: 'Lenovo ThinkPad', price: 999, description: 'Business class laptop', highlighted: false }
  ];

  selectedUser: { id: number, name: string; age: number; email: string } | null = null;

  selectedProduct: {id: number, name: string; price: number; description: string, highlighted: boolean} | null = null;

  handleSelect(id: number) {
    const user = this.users.find(u => u.id === id);
    if (user) {
      this.selectedUser = user;
    } 
  }

  handleSelectProduct(id: number) {
    const product = this.products.find(product => product.id === id);
    if(product) {
      this.selectedProduct = product;
    } 
  }

  handleRemoveProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);

    if(this.selectedProduct?.id === id) {
      this.selectedProduct = null;
      this.selectedProductId = null;
    }
  }

  handleHighlightAllProduct() {
    this.highlightedAll = !this.highlightedAll

    this.products = this.products.map((product) => {
      return {...product, highlighted: this.highlightedAll};
    });
  }

}
