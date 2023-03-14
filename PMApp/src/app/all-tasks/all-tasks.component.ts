import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';


@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit{

  constructor(private userDataService: UserDataService){}

  ngOnInit(){ 
  }
  tasks = this.userDataService.tasksList;
}
