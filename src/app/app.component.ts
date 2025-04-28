import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { AddProductComponent } from './add-product/add-product.component';
import { TodoComponent } from "./todo/todo.component";
import { FilterProductsPipe } from './filter-products.pipe';
import { FormsModule } from '@angular/forms';
import { SortByPricePipe } from './sort-by-price.pipe';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HeaderComponent, UserCardComponent, ProductCardComponent, AddProductComponent, TodoComponent, FilterProductsPipe, FormsModule, SortByPricePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  filterTerm: string = '';
  title = 'first-project';
  isSelected = false;
  highlightedAll = false;
  sortDirection: 'asc' | 'desc' = 'asc';

  selectedProductId: number | null = null;
  selectedUserIds: number[] = [];

  targetProductId: number | null = null;
  message: string = "";

  users = [
    { id: 1, name: 'Алия', age: 25, email: 'aliya@example.com' },
    { id: 2, name: 'Бакай', age: 32, email: 'bakai@example.com' },
    { id: 3, name: 'Динара', age: 28, email: 'dinara@example.com' }
  ];

  products = [
    { id: 101, name: 'MacBook Air', price: 100, description: '13-inch laptop from Apple', highlighted: false, clickCount: 0 },
    { id: 102, name: 'Dell XPS 15', price: 200, description: 'Powerful Windows laptop', highlighted: false, clickCount: 0 },
    { id: 103, name: 'Lenovo ThinkPad', price: 300, description: 'Business class laptop', highlighted: false, clickCount: 0 },
  ];

  todos:Todo[] = [
    { id: 1, title: 'Выучить Angular', completed: false },
    { id: 2, title: 'Сделать практику', completed: false },
    { id: 3, title: 'Создать проект', completed: false }
  ]


  selectedUser: { id: number, name: string; age: number; email: string } | null = null;

  selectedProduct: {id: number, name: string; price: number; description: string, highlighted: boolean, clickCount: number} | null = null;

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

  handleToggleUserSelection(id: number) {
    const isAlreadySelected = this.selectedUserIds.includes(id);

    if(isAlreadySelected) {
      this.selectedUserIds = this.selectedUserIds.filter(uid => uid !== id);
    }
    else {
      this.selectedUserIds.push(id);
    }
  }

  handleClickCount(id: number) {
    this.products.map((product) => {
      if(product.id === id) {
        return {...product, clickCount: product.clickCount++};
      }

      return product;
    })
  }

  handleAddProduct(product: any) {
    console.log(this.products);
    if(product) {
      this.products.push(product);
    }
  }

  pickRandomProduct() {
    const ids = this.products.map((product) => product.id);
    const randomIndex = Math.floor(Math.random() * ids.length);

    this.targetProductId = ids[randomIndex];
    this.message = '';
  }

  handleGuest(id: number) {
    if(this.targetProductId === null) return;

    if(id === this.targetProductId) {
      this.message = '🎉 Congratulations You found the product';
    } else {
      this.message = '❌ Sorry, You did not found the product';
    }
  }


  handleToggleTodo(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    } else {
      console.warn('Задача с id', id, 'не найдена');
    }
  }

  toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }
}
