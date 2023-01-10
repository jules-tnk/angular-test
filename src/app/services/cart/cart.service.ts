import { Injectable } from '@angular/core';
import {ProductCommand} from "../../model/productCommand";
import {Product} from "../../model/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productCommands: ProductCommand[] = [];

  constructor() { }

  getProductCommands(): ProductCommand[] {
    this.getCartFromLocalStorage();
    return this.productCommands;
  }

  addToCart(product: Product){
    if (this.isProductInCart(product)){
      return
    }
    let newCommand: ProductCommand = {
      product: product,
      quantity: 1
    }
    this.productCommands.push(newCommand);
    this.saveCartInLocalStorage()
  }

  removeFromCart(product: Product){
    let newCart: ProductCommand[] = [];
    for (const productCommand of this.productCommands) {
      if (productCommand.product?.id != product.id){
        newCart.push(productCommand);
      }
    }
    this.productCommands = newCart;
    this.saveCartInLocalStorage()
  }

  isProductInCart(product: Product): boolean{
    for (let productCommand of this.productCommands) {
      if (productCommand.product.id == product.id){
        return true;
      }
    }
    return false;
  }

  saveCartInLocalStorage(){
    localStorage.setItem('CART_KEY', JSON.stringify(this.productCommands));
  }

  getCartFromLocalStorage(){
    let savedCartJson = localStorage.getItem('CART_KEY');
    if (savedCartJson){
      this.productCommands = JSON.parse(savedCartJson);
    }
  }


}
