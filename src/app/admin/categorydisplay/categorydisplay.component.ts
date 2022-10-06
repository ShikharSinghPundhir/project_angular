import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-categorydisplay',
  templateUrl: './categorydisplay.component.html',
  styleUrls: ['./categorydisplay.component.css']
})
export class CategorydisplayComponent implements OnInit {
  categorydata:any
  constructor(private admin_service:AdminserviceService) { }

  ngOnInit(): void {
    this.admin_service.getcategory().subscribe((res)=>{
      this.categorydata=res
    })

  }


}
