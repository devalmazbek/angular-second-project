import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts',
  standalone: true
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: any[], searchTerm: string): any[] {
    if (!products) return [];
    if (!searchTerm) return products;

    searchTerm = searchTerm.toLowerCase();

    return products.filter(p => p.name.toLowerCase().includes(searchTerm));
  }
}
