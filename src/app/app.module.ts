import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing,appRoutingProviders }  from './app.routing';
import { AppComponent } from './app.component';
import {Catalog} from "./catalog.component";
import {Details} from "./details.component";
import {Cart} from "./cart.component";
import {ItemPreview} from "./item-preview.component";
import {CartService} from "./Services/cart.service";
import {CatalogService} from "./Services/shopping.service";

@NgModule({
  declarations: [
    AppComponent,
    Catalog,
    Details,
    Cart,
    ItemPreview
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders, CartService, CatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
