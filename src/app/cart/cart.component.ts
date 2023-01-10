import { Component, OnInit } from '@angular/core';
import {ProductCommand} from "../model/productCommand";
import {CartService} from "../services/cart/cart.service";
import {Product} from "../model/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productCommands: ProductCommand[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCommandsFromCart();
  }

  getCommandsFromCart(){
    this.productCommands = this.cartService.getProductCommands();
  }

  removeFromCart(product: Product){
    this.cartService.removeFromCart(product);
    this.getCommandsFromCart();
  }

}
