import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routing,appRoutingProviders }  from './app.routing';
import {MaterialModule} from '@angular/material';
import { AppComponent } from './app.component';
import {Catalog} from "./catalog.component";
import {Details} from "./details.component";
import {Cart} from "./cart.component";
import {ItemPreview} from "./item-preview.component";
import {CartItem} from "./cart-item.component";
import {CartService} from "./Services/cart.service";
import {CatalogService} from "./Services/shopping.service";
import {Visa, MasterCard, PayPalCheckout} from './Utils/payment-methods';

@NgModule({
  declarations: [
    AppComponent,
    Catalog,
    Details,
    Cart,
    CartItem,
    ItemPreview
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule,
    routing
  ],
  providers: [appRoutingProviders, CartService, CatalogService,PayPalCheckout],
  bootstrap: [AppComponent]
})
export class AppModule { }
