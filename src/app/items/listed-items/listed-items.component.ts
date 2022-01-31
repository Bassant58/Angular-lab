import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-listed-items',
  templateUrl: './listed-items.component.html',
  styleUrls: ['./listed-items.component.scss']
})
export class ListedItemsComponent implements OnInit {
  @Input() 
  productDetailsQ!: Product
  constructor() { }

  ngOnInit(): void {
  }

}
