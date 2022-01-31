import { category } from "./category";
import { paymentOption } from "./payment-type";
import { productLang } from "./product-language";
import { tag } from "./tags";

export interface Product {
    [x: string]: any;
    
    _id?:number;
    data: productLang [];
    price: number ; 
    discount: number ;
    imagesUrls: string[];
    category: category
    paymentOption: paymentOption []
    tags: tag [] 
    __v:number
}



