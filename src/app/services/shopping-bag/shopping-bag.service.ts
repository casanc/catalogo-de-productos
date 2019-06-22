import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Product } from 'src/app/models/product/product';


@Injectable({
  providedIn: 'root'
})
export class ShoppingBagService {

  private products: Array<Product>;
  private productsSubject;

  constructor() {
    this.productsSubject = new BehaviorSubject([]);
    this.products = new Array<Product>();
  }

  addElementToShoppingBag(product: Product): boolean {
    if (this.products.push(product)) {
      this.refresh();
      return true;
    } else {
      return false;
    }
  }

  deleteElementToShoppingBag(product: Product): boolean {
    if (this.products.length > 0) {
      for (let index = 0; index < this.products.length; index++) {
        if (this.products[index] == product) {
          console.log('El producto esta en la lista');
          return true;
        } else {
          console.log('El producto NO esta en la lista');
          return false;
        }
      }
    } else {
      console.log('La lista esta vacia');
      return false;
    }
  }
  
  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  private refresh() {
    this.productsSubject.next(this.products);
  }
}
