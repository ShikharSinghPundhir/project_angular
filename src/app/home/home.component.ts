import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminserviceService } from '../admin/adminservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any
  constructor(private admin_service:AdminserviceService) { }

  ngOnInit(): void {
    
    this.admin_service.getdata().subscribe((res=>{
      this.data=res
      //console.log(res)
    }))
  }

}
