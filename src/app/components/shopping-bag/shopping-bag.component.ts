import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ShoppingBagService } from 'src/app/services/shopping-bag/shopping-bag.service';
import { Product } from 'src/app/models/product/product';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-shopping-bag',
  templateUrl: './shopping-bag.component.html',
  styleUrls: ['./shopping-bag.component.css']
})
export class ShoppingBagComponent implements OnInit {

  private orders: number;

  constructor( private cookieService: CookieService ) { }

  ngOnInit() {
    if ( this.cookieService.check('orders') ) {
      console.log('if');
      this.orders = parseInt( this.cookieService.get('orders') );
    } else {
      console.log('else');
      this.orders = 0;
    }
  }
}
