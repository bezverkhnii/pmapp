import { Component, OnInit } from '@angular/core';

 
@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.css']
})
export class RegPageComponent implements OnInit {
  hide = true;

  name!: string;
  login!: string;
  password!: string;

  constructor() { }

  ngOnInit(): void {
  }

  logInputValues(): void {
    console.log('Name:', this.name);
    console.log('Login:', this.login);
    console.log('Password:', this.password);
  }
}
