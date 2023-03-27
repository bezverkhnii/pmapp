import { Component,OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { TranslateService } from '@ngx-translate/core';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-todays-task',
  templateUrl: './todays-task.component.html',
  styleUrls: ['./todays-task.component.css']
})
export class TodaysTaskComponent implements OnInit {
  boards = this.service.boards;

  constructor(public translate: TranslateService,
              private service: CustomerService) {}

  language:any = localStorage.getItem('language');

  ngOnInit(){
    this.translate.use(this.language);
  }



}

class Task {
  constructor(public title: string){

  }
}
