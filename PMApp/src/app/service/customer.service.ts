import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'http://localhost:3000/' 

  constructor(private http:HttpClient) { }

  LoadCustomer(){
    return this.http.get(this.apiUrl);
  }
  RemoveCustomer(id:any){
    return this.http.delete(this.apiUrl + '/' + id)
  }
}
