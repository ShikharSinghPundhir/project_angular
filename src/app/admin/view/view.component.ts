import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id:any
  viewblogid:any
  constructor(private admin_service:AdminserviceService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.paramMap.get('id')
    this.admin_service.view_blog(this.id).subscribe((res)=>{
      this.viewblogid=res;
      console.log(this.viewblogid)
    })
  }

}
