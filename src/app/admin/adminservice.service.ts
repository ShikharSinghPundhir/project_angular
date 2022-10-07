import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  url="http://localhost:3000/"
  constructor(private http : HttpClient) { }
  getdata(){
    return this.http.get(this.url+'blogs')
  }
  adddata(add_data_var:any){
    return this.http.post(this.url+'blogs',add_data_var)

  }
  view_blog(id:any){
    return this.http.get(this.url+'blogs/'+id)
  }
  update_blog(data:any,id:any){
    return this.http.put(this.url+'blogs/'+id,data)
  }
  getcontact(){
    return this.http.get(this.url+'contacts')
  }
  addcontact(add_contact_var:any){
    return this.http.post(this.url+'contacts',add_contact_var)

  }
  getcategory(){
    return this.http.get(this.url+'category')
  }
  addcategory(add_category_var:any){
    return this.http.post(this.url+'category',add_category_var)
  }
  adduser(add_user_var:any){
    return this.http.post(this.url+'user',add_user_var)
  }
  getuser(){
    return this.http.get(this.url+'user')
  }
}
