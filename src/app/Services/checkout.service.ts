import {discounts} from "../Mock/discounts.mock.json";
//import {paymentMethods} from "../Mock/payment-methods.mock.json";
import {Visa, MasterCard, PayPalCheckout} from '../Utils/payment-methods';
import {Http, Response,Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

export interface ICheckoutType {
    name:string;
    pay(totalPrice:number):any;

}
export interface IDiscount {
    code:string;
    amount:number;//percentage
}
export interface ICheckout {
    checkOut(totalPrice:number):string;
}
@Injectable()
export class DefaultCheckout implements ICheckout{
    private _checkOutType:ICheckoutType = null;

    constructor(private paypal:PayPalCheckout)
    {

    }
    set checkOutType(value:string) {
        switch(value)
          {
          case "PayPal":
            this._checkOutType = this.paypal;
            break;
          /*case "Visa":
            this._checkOutType = this.visa;
            break;
          case "MasterCard":
            this._checkOutType = this.mc;
            break;*/
          }

    }

    checkOut(totalPrice:number){
      if (!this._checkOutType)
      {
        return "Please select method of payment"
      }else
      {
        this._checkOutType.pay(totalPrice).subscribe(
          (data: any) => {
              let dataloc= data;
          }
        )
      }
      return
    }

}

