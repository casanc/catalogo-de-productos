import { Component, OnInit, Input } from '@angular/core';

import { ShoppingBagService } from '../../services/shopping-bag/shopping-bag.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private responseService: Observable<any[]>;
  private numElementsInShoppingBag;

  constructor(private shoppingBagService: ShoppingBagService) {
    this.numElementsInShoppingBag = 0;
  }

  ngOnInit() {
    this.responseService = this.shoppingBagService.getProducts();
    this.responseService.pipe().subscribe( ( data ) => {
      if (data.length !== 0) {
        this.numElementsInShoppingBag = data.length;
      } else {
        this.numElementsInShoppingBag = 0;
      } 
    });
  }

}
