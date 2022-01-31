import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-second-nav',
  templateUrl: './second-nav.component.html',
  styleUrls: ['./second-nav.component.scss'],
})
export class SecondNavComponent implements OnInit {
  productFromFirstNav: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.itemAdded.subscribe(
      (next) => {
        let index = this.productFromFirstNav.findIndex(
          (item) => item._id == next._id
        );

        next.__v = 1;

        if (index > -1) {
          this.productFromFirstNav[index].__v++;
        } else {
          this.productFromFirstNav.push(next);
        }
      }, //called when emit is done => object sent from emit {this is from product item so we have the product :  this.productService.itemAdded.emit(this.productItem)}
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }

  delete(product: Product) {
    // product.__v=1
    if (product.__v > 1) {
      product.__v--;
    } else {
      this.productFromFirstNav.splice(this.productFromFirstNav.length - 1, 1);
    }
  }

  cartTotalNum() {
    let number = 0;

    if (this.productFromFirstNav.length > 0) {
      for (let index = 0; index < this.productFromFirstNav.length; index++) {
        number += this.productFromFirstNav[index].__v;
      }
      return number;
    } else {
      return number;
    }
  }

  countTotalPrice() {
    let total = 0;
    if (this.productFromFirstNav.length > 0) {
      for (let index = 0; index < this.productFromFirstNav.length; index++) {
        if (this.productFromFirstNav[index].discount) {
          let final =
            this.productFromFirstNav[index].price -
            this.productFromFirstNav[index].discount; //change the discount to value 0 to get rid of undefined
          total += this.productFromFirstNav[index].__v * final;
        } else {
          total +=
            this.productFromFirstNav[index].__v *
            this.productFromFirstNav[index].price;
        }
      }
      return total;
    } else {
      return total;
    }
  }
}
