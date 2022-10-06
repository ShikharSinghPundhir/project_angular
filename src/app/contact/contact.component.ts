import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminserviceService } from '../admin/adminservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  id:any;
  form:any;
  constructor(private admin_service:AdminserviceService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name:new FormControl(''),
     email:new FormControl(''),
      phone:new FormControl(''),
      message:new FormControl('')
    })
  }
  formsubmitcontact(){
    this.admin_service.addcontact(this.form.value).subscribe((res)=>{
      console.log(res)
    })
  }

}
