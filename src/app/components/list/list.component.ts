import { Component, OnInit, Input } from '@angular/core';

import { Product } from 'src/app/models/product/product';
import { Observable } from 'rxjs';
import { ShoppingBagService } from 'src/app/services/shopping-bag/shopping-bag.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Array<Product>;
  private responseService: Observable<any[]>;
  private totalPayment: number;

  constructor(
    public router: Router,
    private shoppingBagService: ShoppingBagService,
    private cookieService: CookieService
    ) {
    this.totalPayment = 0;
  }

  ngOnInit() {
    this.responseService = this.shoppingBagService.getProducts();
    this.responseService.pipe().subscribe( ( data ) => {
      this.products = data.map( ( product ) => {
        this.totalPayment += product.price;
        return product;
      });
    });
  }

  deleteElementShoppingBag(idProduct) {
    this.responseService = this.shoppingBagService.updateProducts(idProduct);
    this.responseService.pipe().subscribe( ( data ) => {
      this.products = data.map( ( product ) => {
        this.totalPayment = 0;
        this.totalPayment += product.price;
        return product;
      });
    });
    if (this.products.length == 0) {
      this.totalPayment = 0;
    }
  }

  saveProducts() {
    if (this.cookieService.check('orders')) {
      let counter = parseInt( this.cookieService.get( 'orders' ));
      counter ++;
      let orderKey = 'order' + counter;
      let productKey = 'product' + counter;
      this.cookieService.set( 'orders', counter + '', 1 );
      this.cookieService.set( orderKey, counter + '', 1 );
      this.cookieService.set( productKey, JSON.stringify(this.products), 1 );
    } else {
      this.cookieService.set( 'orders', '1', 1 );
      this.cookieService.set( 'order1', '1', 1 );
      this.cookieService.set( 'product1', JSON.stringify(this.products), 1 );
    }
  }
}
