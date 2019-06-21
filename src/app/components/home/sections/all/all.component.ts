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
        console.log(data[i]['idProducto']);
        console.log(data[i]['descripcion']);
        console.log(data[i]['cantidadDisponible']);
        console.log(data[i]['imagen']);
        console.log(data[i]['miniatura']);
        console.log(data[i]['categoria']);
        console.log(data[i]['precio']);
        console.log('--------------------');
      }
    });
  }

  getAllProducts() {
    
  }

}
