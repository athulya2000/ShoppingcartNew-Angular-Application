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
import { UserLoginComponent } from './user-login/user-login.component';
import { NavBar2Component } from './nav-bar2/nav-bar2.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
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
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  {
    path:"navbar",
    component:NavBar2Component
  },
  {
    path:"searchproduct",
    component:UserSearchComponent
  },
  {
    path:"viewprofile",
    component:ViewProfileComponent
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
    RegistrationComponent,
    UserLoginComponent,
    NavBar2Component,
    UserSearchComponent,
    ViewProfileComponent
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
