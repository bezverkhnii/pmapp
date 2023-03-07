import { Component } from '@angular/core';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent {

  tasks: Task[] = [
    new Task('This'),
    new Task('works too'),
  ];

}

class Task {
  constructor(public title: string){

  }
}