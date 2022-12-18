import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {
  name=""

  SearchData:any=[]

  constructor(private api:ApiService){
    this.api.fetchProducts().subscribe(
      (response)=>{
        this.SearchData=response
      }
    )
  }
   


  readValues=()=>{
    let data:any={"name":this.name}
    console.log(data)
    this.api.searchProduct(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("Invalid product name")
        } else {
          this.SearchData=response
        }
      }
    )
  }

}


