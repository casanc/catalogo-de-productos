import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home/home.component';

import { RouterModule, Routes } from '@angular/router';
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
    SmartphonesComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
