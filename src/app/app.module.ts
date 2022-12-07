import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { ViewallProductsComponent } from './viewall-products/viewall-products.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SearchProductComponent } from './search-product/search-product.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegistrationComponent } from './registration/registration.component';
const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"add",
    component:AddProductsComponent
  },
  {
    path:"view",
    component:ViewallProductsComponent
  },
  {
    path:"search",
    component:SearchProductComponent
  },
  {
    path:"registration",
    component:RegistrationComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddProductsComponent,
    ViewallProductsComponent,
    SearchProductComponent,
    NavBarComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
