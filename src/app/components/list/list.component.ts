import { Component, OnInit, Input } from '@angular/core';

import { Product } from 'src/app/models/product/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() products: Array<Product>;

  constructor() { }

  ngOnInit() {
  }

}
