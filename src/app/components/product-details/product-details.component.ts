import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetProductService } from 'src/app/services/product/get-product.service';
import { ShoppingBagService } from 'src/app/services/shopping-bag/shopping-bag.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private product: Product;
  private responseService: Observable<any[]>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private getProductService: GetProductService,
    private shoppingBagService: ShoppingBagService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( ( params ) => {
      if(params.has("idProduct")) {
        this.getProductService.getProducts().subscribe( ( products ) => {
          products.map( ( product ) => {
            if(params.get("idProduct") == product['idProducto']) {
              const p = new Product();
              p.setIdProduct(product['idProducto']);
              p.setInStock(product['cantidadDisponible']);
              p.setCategory(product['categoria']);
              p.setDescription(product['descripcion']);
              p.setImg(product['imagen']);
              p.setMiniature(product['miniatura']);
              p.setPrice(product['precio']);
              this.product = p;
            }
          });
        });
      }
    });
  }

  setShoppingBag(product: Product) {
    if(this.shoppingBagService.addElementToShoppingBag(product)) {
      console.log('Elemento insertado');
    } else {
      console.log('Elemento NO insertado');
    }
  }
}
