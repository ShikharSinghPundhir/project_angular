import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {
 id:any
 form:any
 editblogid:any
  constructor(private admin_service:AdminserviceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      title:new FormControl(''),
      description:new FormControl('')
    })
    this.id=this.route.snapshot.paramMap.get('id')
    this.admin_service.view_blog(this.id).subscribe((res)=>{
      this.editblogid=res;
      // console.log(this.editblogid)
      this.form.patchValue({
        title: this.editblogid.title,
        description: this.editblogid.description
      })
    })

  }
  update(){
    this.admin_service.update_blog(this.form.value,this.id).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/admin-display'])
    })
  }


 }
