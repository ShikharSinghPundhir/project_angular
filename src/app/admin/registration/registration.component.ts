import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  id:any; 
  form:any
  constructor(private admin_service:AdminserviceService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name : new FormControl(''),
      email :new FormControl(''),
      password :new FormControl('')
    })
  }
  add_user(){
    this.admin_service.adduser(this.form.value).subscribe((res)=>{
      console.log(res)
    })


  }

}
