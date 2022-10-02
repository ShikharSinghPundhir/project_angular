import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {
  id:any;
  form:any;
  constructor(private admin_service:AdminserviceService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title : new FormControl(''),
      description :new FormControl('')
    })
  }
  add_blog(){
    this.admin_service.adddata(this.form.value).subscribe((res)=>{
      console.log(res)
    })
  }

}
