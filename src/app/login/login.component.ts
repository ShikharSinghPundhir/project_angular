import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../admin/adminservice.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:any


  constructor(private admin_service:AdminserviceService,private router:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email :  new FormControl(''),
      password : new FormControl('')
    })
  }

  
  login_user(){
    // this.admin_service.user_login(this.form.value).subscribe((res)=>{
    //   console.log(res)
    console.log(this.form.value)
    this.admin_service.user_login(this.form.value).subscribe(
      res=>{
        console.log(res);
        this.form.reset();
        this.router.navigate(["/admin-dashboard"])
      }
    )
    
  }

}
