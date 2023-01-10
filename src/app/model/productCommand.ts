import {Product} from "./product";

export interface ProductCommand {
  product: Product;
  quantity:number;
}
