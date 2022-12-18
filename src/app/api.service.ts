import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchProducts=()=>{
    return this.http.get("http://localhost:8080/viewall")
  }
  addProducts=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/add",dataToSend)
  }
  searchProduct=(dataToSend:any)=>{
     return this.http.post("http://localhost:8080/search",dataToSend)
  }
  addRegistration=(dataToSend:any)=>{
     return this.http.post("http://localhost:8080/registration",dataToSend)
  }
  userLogin=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/validitity",dataToSend)
  }
  getProfileDetails=(data:any)=>{
    return this.http.post("http://localhost:8080/userinfo",data)
  }
 
}
