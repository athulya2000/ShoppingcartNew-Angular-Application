import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  emailid=""
  password=""

  UserLogin:any=[]

  constructor(private api:ApiService,private route:Router){}


  readValues=()=>{
    let data:any={"emailid":this.emailid,"password":this.password}
    console.log(data)
    this.api.userLogin(data).subscribe(
      (response:any)=>{
        this.emailid=""
        this.password=""
        if (response.status=="success") {
          let userId=response.userId
          console.log(userId)
          localStorage.setItem("userInfo",userId)
          this.route.navigate(['/viewprofile'])
        } else {
         alert(response.message)
          
        }
      }
    )
  }
}
