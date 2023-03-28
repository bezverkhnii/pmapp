import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegService {
  apiUrl = 'https://boiling-dusk-17255.herokuapp.com/auth/signup';
  constructor(private http:HttpClient) { }

  ProceedRegister(usercred:any){
    return this.http.post(this.apiUrl, usercred)
  }
}
