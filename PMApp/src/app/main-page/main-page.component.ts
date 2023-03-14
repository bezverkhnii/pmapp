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
    this.userData = this.userDataService.userData
  }

}
