import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GetProductService } from 'src/app/services/product/get-product.service';
import { Product } from 'src/app/models/product/product';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  private responseService: GetProductService;
  private products: Array<Product>;
  private product: Product;
  private productList: any;
  private isEmpty: boolean;

  constructor(private http: HttpClient) {
    this.products = new Array<Product>();
    this.isEmpty = true;
  }

  ngOnInit() {
    this.responseService = new GetProductService(this.http);
    this.productList = this.responseService.getProducts()
    .subscribe( ( data ) => {
      if (data.length === 0) {
        this.isEmpty = true;
      } else {
        this.isEmpty = false;
      }
      for (let i = 0; i < data.length; i ++) {
        this.product = new Product();
        this.product.setIdProduct(data[i]['idProducto']);
        this.product.setDescription(data[i]['descripcion']);
        this.product.setInStock(data[i]['cantidadDisponible']);
        this.product.setImg(data[i]['imagen']);
        this.product.setMiniature(data[i]['miniatura']);
        this.product.setCategory(data[i]['categoria']);
        this.product.setPrice(data[i]['precio']);
        this.products.push(this.product);
      }
    });
  }
}
