import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  userData:any;

  constructor(public translate: TranslateService){
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
  }

  switchLang(lang:string){
    localStorage.setItem('language',lang);
    this.translate.use(lang)
  }

  ngOnInit(){
    localStorage.setItem('language', 'en');
    const token = localStorage.getItem('token')
    function parseJwt (token: any) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
  
      return JSON.parse(jsonPayload);
  }
    fetch('', { headers:{ Authorization:`Bearer ${token}` } })
    this.userData = parseJwt(token);
  }
}