import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Product } from 'src/app/models/product/product';
import { ShoppingBagService } from 'src/app/services/shopping-bag/shopping-bag.service';

@Component({
  selector: 'app-generate-order',
  templateUrl: './generate-order.component.html',
  styleUrls: ['./generate-order.component.css']
})
export class GenerateOrderComponent implements OnInit {

  private generateOrderForm: FormGroup;
  private validFile: boolean;
  private showWarning: boolean;
  private infoOrder: Array<String>;
  private name: any;
  private bornDate: any;
  private city: any;
  private file: any;
  products: Array<Product>;

  constructor(
    private formBuilder: FormBuilder,
    private cookieService: CookieService,
    private shoppingBagService: ShoppingBagService
    ) {
    this.generateOrderForm = formBuilder.group({
      'name': ['', Validators.required],
      'bornDate': ['', Validators.required],
      'city': ['', Validators.required],
      'file': ['', Validators.required],
    });
    this.validFile = false;
    this.showWarning = true;
    this.name = '';
    this.bornDate = '';
    this.city = '';
    this.file = '';
    this.infoOrder = [];
    this.products = [];
  }

  ngOnInit() {
  }

  uploadFile(event) {
    if(event.target.files[0].size > 1000000) {
      this.validFile = false;
      this.showWarning = false;
    } else {
      this.validFile = true;
      this.showWarning = true;
    }
  }

  saveInfoOrder(name: string, date: string, city: string, file: string) {
    let counter = parseInt( this.cookieService.get( 'orders' ));
    let infoOrderKey = 'infoOrder' + counter;
    this.infoOrder.push( name );
    this.infoOrder.push( date );
    this.infoOrder.push( city );
    this.infoOrder.push( file.replace("C:\\fakepath\\", "") );
    this.cookieService.set( infoOrderKey, JSON.stringify( this.infoOrder), 1 );
    this.shoppingBagService.refresh(this.products);
  }
}
