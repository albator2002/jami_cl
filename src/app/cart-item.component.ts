import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";

import {CatalogService} from './Services/shopping.service';
import {Item} from "./Models/Item.model";
import {CartService} from "./Services/cart.service";

@Component({
    selector: 'cart-item',
    styles:[`       
        .row b{
            cursor:pointer;
        }
    `],
    template: `
            <div class="div-table-col" style="width: 50px"><img src={{item.image_src}} width=48/> </div>
            <div class="div-table-col"><button md-button (click)="viewDetails()" >{{item.description}}</button> </div>
            <div class="div-table-col">{{item.price}}$</div>
           
    `
})

export class CartItem
{
     @Input() item:Item;
    constructor(private router: Router, private cartService:CartService)
    {

    }

    viewDetails()
    {
        this.router.navigate( ['/Item',this.item.id] )
    }

}
