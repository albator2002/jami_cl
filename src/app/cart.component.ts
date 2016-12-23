import {Component} from "@angular/core";
import {NgIf} from "@angular/common";

import {Item} from "./Models/Item.model";
import {CartService} from "./Services/cart.service";
import {CartItem} from "./cart-item.component";
import {DefaultCheckout} from "./Services/checkout.service";
import {paymentMethods} from "./Mock/payment-methods.mock.json";
import {ICheckoutType} from "./Services/checkout.service";


@Component({
    selector:'cart',
    providers:[DefaultCheckout],
    template: `
        <h2>Cart</h2>
        <div *ngIf=cartItems>
         <md-card>
            <div class="container">
              <div class="app-content">
               <div class="div-table">
                <div class="div-table-row">
                  <div class="div-table-col" style="width: 50px;">.</div><div  class="div-table-col">Description</div><div  class="div-table-col">Prix</div><div  class="div-table-col">Quantité</div><div  class="div-table-col">Montant</div>
                </div>
                <div class="div-table-row" *ngFor="let item of cartItems">
                    <cart-item [item]="item"></cart-item>
                </div>
               </div>
              </div>
              
            </div>
           
           
            <div class="container">
                <div class="row">
                    Total pay: {{cartService.getTotalPrice()}}
                </div>
            </div>
            </md-card>
            <br>
            <div class="container">
                <div class="row" (click)="setPaymentType($event.target.value)">
                    Please select payment method:
                    <button value="PayPal">PayPal</button>
                    <button value="Visa">Visa</button>
                    <button value="MasterCard">MasterCard</button>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <button (click)="pay()">Pay</button>
                </div>
            </div>
            <div class="container" *ngIf="paymentOutput">
                <div class="row">
                    {{paymentOutput}}
                </div>
            </div>
          
        </div>
    `,
})

export class Cart {
    private cartItems: Item[] = [];
    private paymentOutput: string = "";
    constructor(private cartService:CartService, private defaultCheckout:DefaultCheckout){
        this.cartItems = cartService.getCart();
    }
    setPaymentType(type:string){
        this.defaultCheckout.checkOutType = paymentMethods.filter(paymentMethod=>paymentMethod.name.toLowerCase()===type.toLowerCase())[0];
    }
    setDiscount(name:string){
        this.cartService.applyDiscount(name);
    }
    pay(){
        this.paymentOutput = this.defaultCheckout.checkOut(this.cartService.getTotalPrice());
    }
}
