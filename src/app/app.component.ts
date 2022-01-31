import { Component } from '@angular/core';
import { Product } from './_models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  ourProduct:Product [] =[]

  addProductInBigContainer(product: Product) {
    console.log("Hello from Big Container");
    console.log(product);


    //  let index =  this.ourProduct.findIndex(item => item._id == product._id)

    //  if(index > -1){
    //     this.ourProduct[index].counter++
    //  }else{
    //    this.ourProduct.push(product)
       
    //  }
    
  }
}
