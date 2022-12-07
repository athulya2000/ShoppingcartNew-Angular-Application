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
  }

]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddProductsComponent,
    ViewallProductsComponent
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
