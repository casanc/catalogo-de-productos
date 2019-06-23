import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { GetProductService } from './services/product/get-product.service'
import { ShoppingBagService } from './services/shopping-bag/shopping-bag.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home/home.component';
import { ShoppingBagComponent } from './components/shopping-bag/shopping-bag.component';
import { AllComponent } from './components/home/sections/all/all.component';
import { TelevisionsComponent } from './components/home/sections/televisions/televisions.component';
import { SmartphonesComponent } from './components/home/sections/smartphones/smartphones.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GenerateOrderComponent } from './components/generate-order/generate-order.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shopping-bag', component: ShoppingBagComponent },
  { path: 'home/televisions', component: TelevisionsComponent },
  { path: 'home/all', component: AllComponent },
  { path: 'home/smartphones', component: SmartphonesComponent },
  { path: 'product-details/:idProduct', component: ProductDetailsComponent },
  { path: 'generate-order', component: GenerateOrderComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ShoppingBagComponent,
    AllComponent,
    TelevisionsComponent,
    SmartphonesComponent,
    PreloaderComponent,
    CardComponent,
    ListComponent,
    ProductDetailsComponent,
    PageNotFoundComponent,
    GenerateOrderComponent,
  ],
  imports: [
    RouterModule.forRoot( routes ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    GetProductService,
    ShoppingBagService,
    CookieService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
