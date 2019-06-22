import { Component, OnInit, Input } from '@angular/core';

import { Product } from 'src/app/models/product/product';
import { Observable } from 'rxjs';
import { ShoppingBagService } from 'src/app/services/shopping-bag/shopping-bag.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() products: Array<Product>;
  private responseService: Observable<any[]>;
  private totalPayment: number;

  constructor(private shoppingBagService: ShoppingBagService) {
    this.totalPayment = 0;
  }

  ngOnInit() {
    this.responseService = this.shoppingBagService.getProducts();
    this.responseService.pipe().subscribe( ( data ) => {
      // if (data.length === 0) {
      //   this.isEmpty = true;
      // } else {
      //   this.isEmpty = false;
      // }
      for (let index = 0; index < data.length; index ++) {
        this.totalPayment = this.totalPayment + data[index]['price'];
        console.log(index + ' - ' + data[index]['price']);
        
        // this.product = new Product();
        // this.product.setIdProduct(data[index]['idProduct']);
        // this.product.setDescription(data[index]['description']);
        // this.product.setInStock(data[index]['inStock']);
        // this.product.setImg(data[index]['img']);
        // this.product.setMiniature(data[index]['miniature']);
        // this.product.setCategory(data[index]['category']);
        // this.product.setPrice(data[index]['price']);
        // this.products.push(this.product);
      }
    });
    console.log(this.totalPayment);
    
  }

}
