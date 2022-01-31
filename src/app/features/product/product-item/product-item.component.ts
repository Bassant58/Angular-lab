import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input()
  productItem!: Product;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  ClickAddToCart() {
    this.productService.itemAdded.emit(this.productItem);
  }
}
