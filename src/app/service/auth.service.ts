import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://boiling-dusk-17255.herokuapp.com/auth/signin';
  constructor(private http:HttpClient) { }

  ProceedLogin(usercred:any){
    return this.http.post(this.apiUrl, usercred)
  }
  isLoggedIn(){
    return localStorage.getItem('token')!=null;
  }

  GetToken(){
    return localStorage.getItem('token')||'';
  }
}
