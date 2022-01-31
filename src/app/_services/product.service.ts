import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Product } from "../_models/product";
import { environment } from "src/environments/environment.prod";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})


export class ProductService {

    itemAdded: EventEmitter <Product> = new EventEmitter<Product> ()
    
    // productArray: Product []=[
    //     {
    //       _id:1,
    //       data: [{id:1 , name:"camera", description: "The Camera", lang: {id:1 , name:"English"} }],
    //       price: 1000 , 
    //       discount: 0,
    //       imagesUrls: [],
    //       category: {id:1 , name:"Accessories"},
    //       tags: [{id:1 , name: "tag1"}, {id:2 , name: "tag2"}],
    //       paymentOption: [{id:1 , name:"Visa"}, {id:1 , name:"Master Card"}],
    //       counter:1
    //     },
    //     {
    //       _id: 2,
    //       data: [{id:2 , name:"Mobile", description: "The Mobile", lang: {id:1 , name:"English"} }],        
    //       price: 10000 , 
    //       discount: 1000,
    //       imagesUrls: [],
    //       category: {id:1 , name:"Accessories"},
    //       tags: [{id:1 , name: "tag1"}, {id:2 , name: "tag2"}, {id:4 , name: "tag4"}],
    //       paymentOption: [{id:1 , name:"Visa"}, {id:1 , name:"Master Card"}],
    //       counter:1
    //     },
    //     {
    //       _id: 3 ,
    //       data: [{id:3 , name:"Laptop", description: "The Laptop", lang: {id:1 , name:"English"} }],
    //       price: 25000 , 
    //       discount: 3000,
    //       // imgUrl: "https://picsum.photos/200/300",
    //       imagesUrls: [],
    //       category: {id:1 , name:"Accessories"},
    //       tags: [{id:1 , name: "tag1"}, {id:2 , name: "tag2"}, {id:3 , name: "tag3"}],
    //       paymentOption: [{id:1 , name:"Visa"}, {id:1 , name:"Master Card"}],
    //       counter:1
    //     },
    //     {
    //       _id: 4 ,
    //       data: [{id:4 , name:"Playstation", description: "The Playstation", lang: {id:1 , name:"English"} }],
    //       price: 10000 , 
    //       discount: 2000,
    //       imagesUrls: [],
    //       category: {id:1 , name:"Accessories"},
    //       tags: [{id:1 , name: "tag1"}, {id:2 , name: "tag2"}],
    //       paymentOption: [{id:1 , name:"Visa"}, {id:1 , name:"Master Card"}],
    //       counter:1
    //     },
    //     {
    //       _id: 5 ,
    //       data: [{id:5 , name:"Cards", description: "The Camera", lang: {id:1 , name:"English"} }],
    //       price: 100 , 
    //       discount: 0,
    //       imagesUrls: [],
    //       // imgUrl: "https://picsum.photos/200/500",
    //       category: {id:1 , name:"Accessories"},
    //       tags: [{id:1 , name: "tag1"}, {id:2 , name: "tag2"}],
    //       paymentOption: [{id:1 , name:"Visa"}, {id:1 , name:"Master Card"}],
    //       counter:1
    //     },
    //     {
    //       _id: 6 ,
    //       data: [{id:6 , name:"Medals", description: "The Medals", lang: {id:1 , name:"English"} }],
    //       price: 100 , 
    //       discount: 0,
    //       // imgUrl: "https://picsum.photos/200/600",
    //       imagesUrls: [],
    //       category: {id:1 , name:"Accessories"},
    //       tags: [{id:1 , name: "tag1"}, {id:2 , name: "tag2"}],
    //       paymentOption: [{id:1 , name:"Visa"}, {id:1 , name:"Master Card"}],
    //       counter:1
    //     },
    //     {
    //       _id: 7 ,
    //       data: [{id:7 , name:"Flowers", description: "The Flowers", lang: {id:1 , name:"English"} }],
    //       price: 50 , 
    //       discount: 30,
    //       // imgUrl: "https://picsum.photos/200/700",
    //       imagesUrls: [],
    //       category: {id:1 , name:"Accessories"},
    //       tags: [{id:1 , name: "tag1"}, {id:2 , name: "tag2"}],
    //       paymentOption: [{id:1 , name:"Visa"}, {id:1 , name:"Master Card"}],
    //       counter:1
    //     },
    //     {
    //       _id: 8 ,
    //       data: [{id:8 , name:"Games", description: "The Games", lang: {id:1 , name:"English"} }],
    //       price: 200 , 
    //       discount: 50,
    //       // imgUrl: "https://picsum.photos/200/800",
    //       imagesUrls: [],
    //       category: {id:1 , name:"Accessories"},
    //       tags: [{id:1 , name: "tag1"}, {id:2 , name: "tag2"}],
    //       paymentOption: [{id:1 , name:"Visa"}, {id:1 , name:"Master Card"}],
    //       counter:1
    //     },
    //     {
    //       _id: 9 ,
    //       data: [{id:9 , name:"Lipstick", description: "Lipstick", lang: {id:1 , name:"English"} }],
    //       price: 100 , 
    //       discount: 0,
    //       // imgUrl: "https://picsum.photos/200/900",
    //       imagesUrls: [],
    //       category: {id:1 , name:"Accessories"},
    //       tags: [{id:1 , name: "tag1"}, {id:2 , name: "tag2"}],
    //       paymentOption: [{id:1 , name:"Visa"}, {id:1 , name:"Master Card"}],
    //       counter:1
    //     },
    //   ];

      // cartArray!: Cart [] 

    constructor(private http: HttpClient){

    }


    getAllProducts(): Observable<{product: Product[] , numberOfProducts: number}>{
      // get is a generic function so we need add to it a return type also

      return  this.http.get<{product: Product[] , numberOfProducts: number}>(`${environment.baseUrl}product`)
      //  return this.productArray.slice()
    }

    getProductBtId(id:string): Observable<Product>{
       return this.http.get<Product>(`${environment.baseUrl}product/${id}`)

      // return this.productArray.find(item => item._id === id ) //for possibility not find product
    }

    // addProduct(product:Product): void{
    //    this.productArray.push(product)
    // }

    // deleteProduct(id:number): Product[] {
    //   return this.productArray.filter(item => item._id != id)
    // }

    // addToCart(product:Product): void{
    //     // let result
    //  let index =  this.cartArray.findIndex(item => item._id == product._id)
    //  if(index > -1){
    //     this.cartArray[index].counter++

    //  }else{
    //    this.cartArray.push(product)
        
    //  }
        // const result = this.cartArray
    //  console.log(result);
    //    return this.cartArray
    // }
}