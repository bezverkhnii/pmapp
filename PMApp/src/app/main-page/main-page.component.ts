import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  userData:any;
  constructor(private userDataService: UserDataService){}
  

  ngOnInit(){
    const token = localStorage.getItem('token')
    function parseJwt (token: any) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
  
      return JSON.parse(jsonPayload);
  }
    fetch('/boards', { headers:{ Authorization:`Bearer ${token}` } })
    this.userData = parseJwt(token);
  }
}