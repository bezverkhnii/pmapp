import { Component } from '@angular/core';

@Component({
  selector: 'app-todays-task',
  templateUrl: './todays-task.component.html',
  styleUrls: ['./todays-task.component.css']
})
export class TodaysTaskComponent {
  tasks: Task[] = [
    new Task('This'),
    new Task('works'),
  ];

}

class Task {
  constructor(public title: string){

  }
}
