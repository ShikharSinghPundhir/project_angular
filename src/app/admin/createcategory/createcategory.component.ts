import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css']
})
export class CreatecategoryComponent implements OnInit {
  form:any
  constructor(private admin_service:AdminserviceService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title : new FormControl(''),
    })
  }
  add_category_ts(){
    this.admin_service.addcategory(this.form.value).subscribe((res)=>{
      console.log(res)
    })
  }

}
