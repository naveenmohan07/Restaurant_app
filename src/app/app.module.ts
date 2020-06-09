import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent} from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ItemsComponent } from './items/items.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { MeComponent } from './me/me.component';
import { AlertComponent } from './auth/alert/alert.component';
import { AuthComponent } from './auth/auth.component';
import { OfferComponent } from './auth/offer/offer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ResetmailComponent } from './resetmail/resetmail.component';
import { CartComponent } from './items/item-list/cart/cart.component';
import { AmountComponent } from './items/item-list/cart/amount/amount.component';
// import { ShoppingcartComponent } from './item-list/shoppingcart/shoppingcart.component';
// import { AgmCoreModule } from '@agm/core';


const route:Routes=[
  {
    path:'home',component:HomeComponent
  },
  {
  path:'items',component:ItemListComponent
  },
  {
    path:'item',component:ItemsComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'auth',component:AuthComponent
  },
  {
    path:'passwordreset',component:ResetmailComponent
  },
  {
    path:'offer',component:OfferComponent
  },
  {
    path:'**',redirectTo: "home"
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    ItemListComponent,
    HomeComponent,
    AboutComponent,
    MeComponent,
    AuthComponent,
    OfferComponent,
    SpinnerComponent,
    ResetmailComponent,
    AlertComponent,
    CartComponent,
    AmountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(route)
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyALJpJzTnPNLcw9MwfIj816X0P1yqxcxTc'
    // })
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
