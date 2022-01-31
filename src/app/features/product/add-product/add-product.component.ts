import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { category } from 'src/app/_models/category';
import { paymentOption } from 'src/app/_models/payment-type';
import { Product } from 'src/app/_models/product';
import { tag } from 'src/app/_models/tags';
import { CategoryService } from 'src/app/_services/category.service';
import { PaymentOptionsService } from 'src/app/_services/payment.service';
import { TagService } from 'src/app/_services/tags.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  // product!: Product []
  product = {} as Product
  categories!: category []
  tags!: tag [] 
  paymentOption!: paymentOption []

  constructor(private category: CategoryService , private tag: TagService , private paymentOptionService: PaymentOptionsService) { }

  ngOnInit(): void {

     this.categories = this.getCategoryData() 
     this.tags = this.getAllTagsData()
     this.paymentOption = this.getAllTagsPaymentData()

  }

    
   getCategoryData(): category[]{
    return this.category.getAllCat()
   }

   getAllTagsData(): tag[]{
     return this.tag.getAllTag()
   }

   getAllTagsPaymentData(): paymentOption[]{
    return this.paymentOptionService.getAllPaymentMethods()
  }

  sendForm(form:NgForm):void{
    console.log(form.value);
    
  }
  
  checkBoxData(i:number){
   let data =  this.paymentOption[i]
   if(!data)
   this.paymentOption.push(data)
  }

}
