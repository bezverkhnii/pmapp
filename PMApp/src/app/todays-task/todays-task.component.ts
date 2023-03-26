import { Component,OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-todays-task',
  templateUrl: './todays-task.component.html',
  styleUrls: ['./todays-task.component.css']
})
export class TodaysTaskComponent implements OnInit {
  tasks: Task[] = [
    new Task('This'),
    new Task('works'),
  ];

  constructor(public translate: TranslateService) {}

  language:any = localStorage.getItem('language');

  ngOnInit(){
    this.translate.use(this.language);
  }

}

class Task {
  constructor(public title: string){

  }
}
