import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {

  name=""
  image=""
  category=""
  description=""
  price=""

  constructor(private api:ApiService){}

  readValues=()=>{
    let data:any={"name":this.name,"image":this.image,"category":this.category,"description":this.description,"price":this.price}
    console.log(data)
    this.api.addProducts(data).subscribe(
      (response:any)=>{
        console.log(response)
       if (response.status=="success") {
        alert("product added successfully")
       } else {
        alert("something went wrong")
       }
      }
    )
  }
}
