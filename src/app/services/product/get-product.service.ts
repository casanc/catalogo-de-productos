import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from 'src/app/models/product/product';

@Injectable({
  providedIn: 'root'
})
export class GetProductService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://fvwzxk56cg.execute-api.us-east-1.amazonaws.com/mock/productos';
  }


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}
