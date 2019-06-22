import { Component, OnInit, Input } from '@angular/core';

import { ShoppingBagService } from '../../services/shopping-bag/shopping-bag.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // @Input() numElementsInShoppingBag;
  // private elementsInShoppingBag: number;

  constructor() { }

  ngOnInit() {
   
  }

}
