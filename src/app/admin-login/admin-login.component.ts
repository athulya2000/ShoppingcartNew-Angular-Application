import { Component } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
 
  username=""
  password=""

  constructor(private route:Router){}

  readValues=()=>{
    let admin:any={"username":this.username,"password":this.password}
    console.log(admin)
    if (this.username=="admin"&& this.password=="12345") {
      this.route.navigate(['/'])
    } 
  
    
  }
    
  }


