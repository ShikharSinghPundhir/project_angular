import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  form:any
  data:any
  constructor(private admin_service:AdminserviceService) { }

  ngOnInit(): void {
    this.form =new FormGroup({
      about : new FormControl('')
    })
    
  
  }
  aboutsubmit(){
    this.admin_service.aboutadd(this.form.value).subscribe((res)=>{
      console.log(res)
    })
    
  }
}
 
   
