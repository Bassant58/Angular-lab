import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product';
import { productStarClass } from 'src/app/_models/product-details';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productItem!: Product;
  relatedProduct!: Product[];

  starClassName: string = 'fas fa-star';
  productStar: productStarClass[] = [
    {
      ClassName: this.starClassName,
    },
    {
      ClassName: this.starClassName,
    },
    {
      ClassName: this.starClassName,
    },
    {
      ClassName: this.starClassName,
    },
  ];

  constructor(
    private productService: ProductService,
    private activatedRouter: ActivatedRoute
  ) {}
  ngOnInit(): void {
    // const id = this.activatedRouter.snapshot.params['id']
    this.activatedRouter.params.subscribe(
      (params) => {
        if (params['id']) {
          this.getProductDetailsById(params['id']);
        }
      },
      (error) => {},
      () => {}
    );

    this.getRelatedProduct();
  }

  getProductDetailsById(id: string) {
    this.productService.getProductBtId(id).subscribe(
      (res) => {
        this.productItem = res;
      },
      (error) => {console.log(error);
      },
      () => {}
    );
  }

  getRelatedProduct() {
    this.productService.getAllProducts().subscribe(
      (res) => {
        this.relatedProduct = res.product.splice(0, 4);
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }

  whenClickAddToCart() {
    this.productService.itemAdded.emit(this.productItem);
  }
}
