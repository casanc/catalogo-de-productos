import { Component, OnInit, Input } from '@angular/core';

import { Product } from 'src/app/models/product/product';
import { ShoppingBagService } from 'src/app/services/shopping-bag/shopping-bag.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() products: Array<Product>;
  private prueba: Array<Product>;

  constructor(private shoppingBagService: ShoppingBagService) { }

  ngOnInit() {
  }

  setShoppingBag(product: Product) {
    if(this.shoppingBagService.addElementToShoppingBag(product)) {
      console.log('Elemento insertado');
    } else {
      console.log('Elemento NO insertado');
    }
  }
}
