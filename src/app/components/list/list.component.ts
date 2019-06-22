import { Component, OnInit, Input } from '@angular/core';

import { Product } from 'src/app/models/product/product';
import { Observable } from 'rxjs';
import { ShoppingBagService } from 'src/app/services/shopping-bag/shopping-bag.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Array<Product>;
  private responseService: Observable<any[]>;
  private totalPayment: number;

  constructor(public router: Router, private shoppingBagService: ShoppingBagService) {
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
}
