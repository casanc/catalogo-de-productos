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

  constructor() { }

  ngOnInit() {
  }
}
