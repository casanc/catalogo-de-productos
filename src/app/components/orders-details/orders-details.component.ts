import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Product } from 'src/app/models/product/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.css']
})
export class OrdersDetailsComponent implements OnInit {

  private isEmpty: boolean;
  private rows: Array<object>;
  private row: {
    id: string,
    city: string,
    receiver: string,
    products: Array<string>
    cost: number
  };

  constructor( 
    private cookieService: CookieService,
    private router: Router,
    private route: ActivatedRoute,
    ) { 
    this.rows = new Array<object>();
  }

  ngOnInit() {
    this.route.paramMap.subscribe( ( params ) => {
      // if(params.has("idOrder")) {
      //   console.log( params.get("idOrder") );
      // }
      if ( params.get("idOrder")  == '' ) {
        if (this.cookieService.check('orders')) { 
          this.isEmpty = true;
          for (let index = 1; index <= parseInt( this.cookieService.get( 'orders' ) ); index++) {
            this.row = {
              id: null,
              city: null,
              receiver: null,
              products: [],
              cost: 0
            };
            this.row.id = this.cookieService.get( 'order' + index );
            JSON.parse( this.cookieService.get( 'infoOrder' + index ) ).map( ( info, index ) => {
              if ( index == 0 ) {
                this.row.receiver = info;
              }
              if ( index == 2 ) {
                this.row.city = info;
              }
            });
            JSON.parse( this.cookieService.get( 'product' + index ) ).map( ( product ) => { 
              this.row.products.push( product['description'] );
              this.row.cost += product['price'];
            });
            this.rows.push( this.row );
          }
        } else {
          this.isEmpty = false;
        }
      } else {
        this.rows = []; 
        this.isEmpty = true;
          // for (let index = 1; index <= parseInt( this.cookieService.get( 'orders' ) ); index++) {
        this.row = {
          id: null,
          city: null,
          receiver: null,
          products: [],
          cost: 0
        };
        this.row.id = this.cookieService.get( 'order' + params.get("idOrder") );
        JSON.parse( this.cookieService.get( 'infoOrder' + params.get("idOrder") ) ).map( ( info, index ) => {
          if ( index == 0 ) {
            this.row.receiver = info;
          }
          if ( index == 2 ) {
            this.row.city = info;
          }
        });
        JSON.parse( this.cookieService.get( 'product' + params.get("idOrder") ) ).map( ( product ) => { 
          this.row.products.push( product['description'] );
          this.row.cost += product['price'];
        });
        this.rows.push( this.row );
        console.log( this.row );
      }
    });
  }

  idSelected(idOrder: string) {
    this.router.navigate(['/orders-details', idOrder]);
    console.log(idOrder);
  }
  
}

