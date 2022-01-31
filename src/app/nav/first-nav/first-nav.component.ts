import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-first-nav',
  templateUrl: './first-nav.component.html',
  styleUrls: ['./first-nav.component.scss']
})
export class FirstNavComponent implements OnInit {
  @Input()
  getProduct: Product [] = []
  
  
  constructor() { }
  
  ngOnInit(): void {

    // this.productService.addProduct(this.getProduct)
  }
  
}
