import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {CartComponent} from "./cart/cart.component";

const routes: Routes = [
  {path:"home", component: HomePageComponent},
  {path:"catalog", component: ProductListComponent},
  {path:"detail/:id", component: ProductDetailComponent},
  {path:"cart", component: CartComponent},
  {path:"", redirectTo: "/home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
