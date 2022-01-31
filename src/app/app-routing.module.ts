import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AddProductComponent } from './features/product/add-product/add-product.component';
import { ProductDetailsComponent } from './features/product/product-details/product-details.component';
import { ProductListContainerComponent } from './features/product/product-list-container/product-list-container.component';
import { AboutUsComponent } from './nav/about-us/about-us.component';
import { LoginPageComponent } from './nav/login-page/login-page.component';
import { RegisterPageComponent } from './nav/register-page/register-page.component';

const routes: Routes = [
  {path: 'home' , component: ProductListContainerComponent},
  {path: '' , redirectTo:'/home' , pathMatch: 'full'},
  {path: 'product' , children: [
    {path: 'details/:id' , component: ProductDetailsComponent},
    {path: 'add' , component: AddProductComponent},
  ]},
  {path: 'About-Us' , component: AboutUsComponent},
  {path: 'login' , component: LoginPageComponent},
  {path: 'register' , component: RegisterPageComponent},
  {path: '**' , component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration: "top"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
