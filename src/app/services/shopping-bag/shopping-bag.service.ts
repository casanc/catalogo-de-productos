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
        this.refresh(this.products);
      return true;
    } else {
      return false;
    }
  }

  updateProducts(idProduct): Observable<Product[]> {
    this.products.map( ( element, index ) => {
      if (element.idProduct == idProduct) {
        this.products.splice(index, 1);
      }
    });
    this.refresh(this.products);
    return this.getProducts();
  }

  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  refresh(productList: Array<Product>) {
    this.productsSubject.next(productList);
    this.productsSubject.asObservable().share;
  }
}
