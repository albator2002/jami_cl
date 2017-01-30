
import {Observable}     from 'rxjs/Observable';
import {Http, Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Injectable} from '@angular/core';
import {CartService} from "../Services/cart.service";
import {Order} from '../Models/order.model';
import {order} from '../Mock/order.mock.json';
import {ICheckoutType} from "../Services/checkout.service";


@Injectable()
export class PayPalCheckout implements ICheckoutType{
  public name;
  private api_URL:string = 'http://localhost:4711/api';

  constructor(private http:Http){
    this.name = "PayPal";

  }

  pay(totalPrice){
    //call REST payment service
    return this.http.post(this.api_URL+'/order', order, {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .map((res : any) => {
      let data = res.json();


    });
  }
}
@Injectable()
export class MasterCard implements ICheckoutType{
  public name;
  private api_URL:string = 'http://localhost:4711/api';

  constructor(private http:Http){
      this.name = "MasterCard";
  }
  pay(totalPrice){
      return this.http.post(this.api_URL+'/order', order, {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .map((res : any) => {
        let data = res.json();


      });
  }
}
@Injectable()
export class Visa implements ICheckoutType{
  public name;
  private api_URL:string = 'http://localhost:4711/api';
  constructor(private http:Http){
      this.name = "Visa";
  }
  pay(totalPrice){
    return this.http.post(this.api_URL+'/order', order, {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .map((res : any) => {
        let data = res.json();


      });
  }
}
