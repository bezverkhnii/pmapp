import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-task-popup',
  templateUrl: './task-popup.component.html',
  styleUrls: ['./task-popup.component.css']
})
export class TaskPopupComponent implements OnInit {
  task: Task = new Task();
  tasksList : Task[] = [];
  constructor(private userDataService: UserDataService){}

  ngOnInit(){
  }
  
  createTask(task: Task){
    this.task.status = 'Not started';
    this.userDataService.tasksList.push(task);
    console.log(this.userDataService.tasksList)
  }
}
