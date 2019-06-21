import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() products: Array<Product>;

  constructor() { }

  ngOnInit() {
  }

}
