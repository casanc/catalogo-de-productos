import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingBagService } from 'src/app/services/shopping-bag/shopping-bag.service';
import { Product } from 'src/app/models/product/product';

@Component({
  selector: 'app-shopping-bag',
  templateUrl: './shopping-bag.component.html',
  styleUrls: ['./shopping-bag.component.css']
})
export class ShoppingBagComponent implements OnInit {

  private products: Array<Product>
  private product: Product;
  private responseService: Observable<any[]>;
  private isEmpty: boolean;

  constructor(private shoppingBagService: ShoppingBagService) {
    this.products = new Array<Product>();
    this.isEmpty = true;
  }

  ngOnInit() {
    this.responseService = this.shoppingBagService.getProducts();
    this.responseService.pipe().subscribe( ( data ) => {
      if (data.length === 0) {
        this.isEmpty = true;
      } else {
        this.isEmpty = false;
      }
      for (let index = 0; index < data.length; index ++) {
        this.product = new Product();
        this.product.setIdProduct(data[index]['idProduct']);
        this.product.setDescription(data[index]['description']);
        this.product.setInStock(data[index]['inStock']);
        this.product.setImg(data[index]['img']);
        this.product.setMiniature(data[index]['miniature']);
        this.product.setCategory(data[index]['category']);
        this.product.setPrice(data[index]['price']);
        this.products.push(this.product);
      }
    });
  }
}
