import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminserviceService } from '../admin/adminservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:any
  viewblogid:any
  recentblogsdetails:any
  categories:any
  constructor(private admin_service:AdminserviceService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.paramMap.get('id')
    this.admin_service.view_blog(this.id).subscribe((res)=>{
      this.viewblogid=res;
      console.log(this.viewblogid)
  })
  this.admin_service.getdata().subscribe((res)=>{
    this.recentblogsdetails=res
  })
  this.admin_service.getcategory().subscribe((res)=>{
    this.categories=res
  })

}

}
