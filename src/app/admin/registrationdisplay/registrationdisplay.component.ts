import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-registrationdisplay',
  templateUrl: './registrationdisplay.component.html',
  styleUrls: ['./registrationdisplay.component.css']
})
export class RegistrationdisplayComponent implements OnInit {
  data:any
  constructor(private admin_service:AdminserviceService) { }

  ngOnInit(): void {
    this.admin_service.getuser().subscribe((res)=>{
      this.data=res
    })
  }

}
