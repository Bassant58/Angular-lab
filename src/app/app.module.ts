import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstNavComponent } from './nav/first-nav/first-nav.component';
import { SecondNavComponent } from './nav/second-nav/second-nav.component';
import { FooterComponent } from './footer/footer.component';
import { PagingComponent } from './items/paging/paging.component';
import { ListedItemsComponent } from './items/listed-items/listed-items.component';
import { ItemToolsComponent } from './items/item-tools/item-tools.component';
import { ProductItemComponent } from './features/product/product-item/product-item.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { ProductListContainerComponent } from './features/product/product-list-container/product-list-container.component';
import { DropDownComponent } from './shared/drop-down/drop-down.component';
import { ProductDetailsComponent } from './features/product/product-details/product-details.component';
import { ErrorComponent } from './error/error.component';
import { ProductService } from './_services/product.service';
import { AboutUsComponent } from './nav/about-us/about-us.component';
import { AddProductComponent } from './features/product/add-product/add-product.component';
import { LoginPageComponent } from './nav/login-page/login-page.component';
import { RegisterPageComponent } from './nav/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstNavComponent,
    SecondNavComponent,
    FooterComponent,
    PagingComponent,
    ListedItemsComponent,
    ItemToolsComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductListContainerComponent,
    DropDownComponent,
    ProductDetailsComponent,
    ErrorComponent,
    AboutUsComponent,
    AddProductComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
