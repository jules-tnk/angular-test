import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {CatalogService} from "../services/catalog/catalog.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  searchKeyWordInput: string = "";

  products: Product[] = [];

  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.catalogService.getAllProducts().subscribe(
      productApiDto => this.products = productApiDto.products
    )
  }

  getProductFromKeywordSearch(keyword: string){
    this.catalogService.getProductsByKeywordSearch(keyword).subscribe(
      productApiDto => this.products = productApiDto.products
    )
  }

}
