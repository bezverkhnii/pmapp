import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit{

  constructor(private userDataService: UserDataService,
              public translate: TranslateService){}

  language:any = localStorage.getItem('language');

  ngOnInit(){
    this.translate.use(this.language)
  }
  tasks = JSON.parse(localStorage.getItem('tasks') || '{}')
}
