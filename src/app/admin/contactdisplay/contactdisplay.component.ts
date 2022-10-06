import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-contactdisplay',
  templateUrl: './contactdisplay.component.html',
  styleUrls: ['./contactdisplay.component.css']
})
export class ContactdisplayComponent implements OnInit {
  contactdetails:any
  constructor(private admin_service:AdminserviceService) { }

  ngOnInit(): void {
    this.admin_service.getcontact().subscribe((res)=>{
      this.contactdetails=res
    })
  }

}
