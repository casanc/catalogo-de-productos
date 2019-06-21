import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { GetProductService } from './services/product/get-product.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home/home.component';
import { ShoppingBagComponent } from './components/shopping-bag/shopping-bag.component';
import { AllComponent } from './components/home/sections/all/all.component';
import { TelevisionsComponent } from './components/home/sections/televisions/televisions.component';
import { SmartphonesComponent } from './components/home/sections/smartphones/smartphones.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shopping-bag', component: ShoppingBagComponent },
  { path: 'home/televisions', component: TelevisionsComponent },
  { path: 'home/all', component: AllComponent },
  { path: 'home/smartphones', component: SmartphonesComponent },
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
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      { useHash: true },
    ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    GetProductService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
