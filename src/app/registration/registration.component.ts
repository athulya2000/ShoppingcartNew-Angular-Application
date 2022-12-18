import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  name=""
  address=""
  phoneno=""
  emailid=""
  password=""
  confirmpassword=""

  constructor(private api:ApiService){}

  readValues=()=>{
    let data:any={"name":this.name,"address":this.address,"phoneno":this.phoneno,"emailid":this.emailid,"password":this.password,"confirmpassword":this.confirmpassword}
    console.log(data)
    this.api.addRegistration(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Registration is successfull")
          this.name=""
          this.address=""
          this.phoneno=""
          this.emailid=""
          this.password=""
          this.confirmpassword=""
        } else {
          alert("something went wrong")
        }
      }
    )
  }
}
