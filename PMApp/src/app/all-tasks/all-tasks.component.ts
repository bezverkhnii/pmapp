import { Component } from '@angular/core';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent {

  tasks: Task[] = [
    new Task('This is '),
    new Task('works'),
  ];

}

class Task {
  constructor(public title: string){

  }
}