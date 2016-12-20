import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Catalog} from "./catalog.component";
import {Details} from "./details.component";
import {Cart} from "./cart.component";

const appRoutes: Routes = [
    { path:'',  component: Catalog },
    { path:'Item/:id',  component: Details },
    { path:'Cart',  component: Cart }
];
export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);