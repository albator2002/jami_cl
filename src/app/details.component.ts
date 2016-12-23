import {Component, Input} from "@angular/core";
import {NgIf,NgFor} from "@angular/common";
import { ActivatedRoute, Params } from '@angular/router';

import {CatalogService} from './Services/shopping.service';
import {CartService} from "./Services/cart.service";
import {Item} from "./Models/Item.model";

@Component({
    selector:'item-details',

    template: `
    <div class="container">
        <div class="row" *ngIf=details>
            <div class="col-md-4"><img src={{details.image_src}}/></div>
            <div class="col-md-4">{{details.name}}<br/>{{details.manufacturer}}<br/>{{details.price}}<br/>{{details.averageReviewRate}}</div>
        </div>
       
        <div class="row" *ngIf=!details>
            <h3>Loading</h3>
        </div>
    </div>
    `
})

export class Details {
    private details:Item;
    constructor(private route: ActivatedRoute, private catalogService:CatalogService, private cartService:CartService){
        this.loadDetailsById( this.route.snapshot.params['id']);

    }
    loadDetailsById(id:String):void{
        this.details = this.catalogService.getById(id);
    }
}
