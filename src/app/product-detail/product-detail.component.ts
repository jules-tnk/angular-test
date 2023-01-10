import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogService} from "../services/catalog/catalog.service";
import {CartService} from "../services/cart/cart.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product?: Product;

  constructor(private router: ActivatedRoute, private catalogService: CatalogService,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById(){
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.catalogService.getProductById(id).subscribe(
      product => this.product = product
    )
  }

  addToCart(){
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }

}
