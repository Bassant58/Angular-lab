import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productArray!: Product [];
  totalLength!:number 
  page:number=1

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    
    this.getProductData()  //this return back the products
  }

  getProductData(){
    //  this function return an observable so we will use subscribe
    this.productService.getAllProducts().subscribe(
      (next)=>{
        // next will return two key (product , number), so we take only the product
        this.productArray = next.product
        this.totalLength = next.product.length
      },
      (error) =>{console.log("what" , error);
       },
      ()=>{}
    )
  }

}
