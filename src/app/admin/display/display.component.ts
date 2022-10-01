import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  data:any
  constructor(private admin_service:AdminserviceService) { }

  ngOnInit(): void {
    this.admin_service.getdata().subscribe((res)=>{
      this.data=res
    })
  }

}
