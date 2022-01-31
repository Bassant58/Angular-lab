import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { categoryClass, tagClass } from 'src/app/_models/filterClass';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss']
})
export class ProductListContainerComponent implements OnInit {
   classOfLi: string = "link list__item"
   classOfI: string = "link__icon fas fa-angle-right" 
   tagClass: string = "tag"

   classObj:categoryClass [] = [
    {
      liClassName: this.classOfLi,
      iClassName: this.classOfI, 
      name: "Arts & Crafts"
     },
     {
      liClassName: this.classOfLi,
      iClassName: this.classOfI, 
      name: "Automotive"
     },
     {
      liClassName: this.classOfLi,
      iClassName: this.classOfI, 
      name: "Baby"
     },
     {
      liClassName: this.classOfLi,
      iClassName: this.classOfI, 
      name: "Books"
     },
     {
      liClassName: this.classOfLi,
      iClassName: this.classOfI, 
      name: "Eletronics"
     },
     {
      liClassName: this.classOfLi,
      iClassName: this.classOfI, 
      name: "Women's Fashion"
     },
     {
      liClassName: this.classOfLi,
      iClassName: this.classOfI, 
      name: "Men's Fashion"
     },
     {
      liClassName: this.classOfLi,
      iClassName: this.classOfI, 
      name: "Health & Household"
     },
     {
      liClassName: this.classOfLi,
      iClassName: this.classOfI, 
      name: "Home & Kitchen"
     },
     {
      liClassName: this.classOfLi,
      iClassName: this.classOfI, 
      name: "Military Accessories"
     },
     {
      liClassName: this.classOfLi,
      iClassName: this.classOfI, 
      name: "Movies & Television"
     },
     {
      liClassName: this.classOfLi,
      iClassName: this.classOfI, 
      name: "Sports & Outdoors"
     },
     {
      liClassName: this.classOfLi,
      iClassName: this.classOfI, 
      name: "Tools & Home Improvement"
     },
     {
      liClassName: this.classOfLi,
      iClassName: this.classOfI, 
      name: "Toys & Games"
     }
   ]

   tagClassObj: tagClass [] = [
    {
      ClassName1: this.tagClass, 
      name: "Nike"
     },
     {
      ClassName1: this.tagClass, 
      name: "Travel"
     },
     {
      ClassName1: this.tagClass, 
      name: "Sport"
     },
     {
      ClassName1: this.tagClass, 
      name: "Tv"
     },
     {
      ClassName1: this.tagClass, 
      name: "Books"
     },
     {
      ClassName1: this.tagClass, 
      name: "Tech"
     },
     {
      ClassName1: this.tagClass, 
      name: "Addidas"
     },
     {
      ClassName1: this.tagClass, 
      name: "Promo"
     },
     {
      ClassName1: this.tagClass, 
      name: "Reading"
     },
     {
      ClassName1: this.tagClass, 
      name: "Social"
     },
     {
      ClassName1: this.tagClass, 
      name: "New"
     },
     {
      ClassName1: this.tagClass, 
      name: "Special"
     },
     {
      ClassName1: this.tagClass, 
      name: "Food"
     },
     {
      ClassName1: this.tagClass, 
      name: "Used"
     },
   ];

  //  @Output()
  //  sendToBigContainer : EventEmitter<Product> = new EventEmitter<Product>()
   
  constructor() { }

  ngOnInit(): void {
  }

  // addToContainer(product: Product){
  //   console.log("hi from container");
  //   console.log(product);
  //   this.sendToBigContainer.emit(product)
    
  // }

}
