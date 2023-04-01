import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router,
              private service: CustomerService,
              public translate: TranslateService) {}

  url = 'https://boiling-dusk-17255.herokuapp.com/boards';

  board: any;
  columns:any[] = [];
  popUp: any;
  taskPopup:any;
  language:any = localStorage.getItem('language')
  ngOnInit() {
    this.translate.use(this.language)
    const popup = document.getElementById('popup');
    const taskPopup = document.getElementById('taskPopup');
    this.popUp = popup;
    this.taskPopup = taskPopup;
    let token = localStorage.getItem('token');
    const id = this.route.snapshot.params['id'];
    fetch(`https://boiling-dusk-17255.herokuapp.com/boards/${id}`, { headers:{ Authorization:`Bearer ${token}` } })
    .then(response => response.json())
    .then(data => {
      this.board = data;
      console.log(data);
    })
    .catch(error => console.log(error));

    fetch(`https://boiling-dusk-17255.herokuapp.com/boards/${id}/columns`, { headers:{ Authorization:`Bearer ${token}`}})
    .then(response => response.json())
    .then(data => {
      this.columns = data;
      console.log(this.columns);
      for(let i = 0; i < this.columns.length; i++){
        fetch(`https://boiling-dusk-17255.herokuapp.com/boards/${id}/columns/${this.columns[i]._id}/tasks`, { headers:{ Authorization:`Bearer ${token}`}})
        .then(response => response.json())
        .then(data =>{
          this.columns[i].tasks = data;
          console.log(this.columns[i].tasks)
        })
        .catch(err => console.error(err))
      }
    })
    .catch(error => console.log(error));
  }

  Column = new FormGroup({
    title: new FormControl("", Validators.required),
    order: new FormControl(this.columns.length, Validators.required)
  });

  Task = new FormGroup({
    title: new FormControl("", Validators.required),
    order: new FormControl(0, Validators.required),
    description: new FormControl('', Validators.required),
    userId: new FormControl(localStorage.getItem('userId'), Validators.required),
    users: new FormControl([], Validators.required)
  });


  openPopup(){
    this.popUp!.classList.add('open-popup');
  }

  closePopup(){
    this.popUp!.classList.remove('open-popup');
  }
  
  openTaskPopup(columnId: string){
    this.taskPopup!.classList.add('open-popup');
    this.columnId = columnId;
  }

  closeTaskPopup(){
    this.taskPopup!.classList.remove('open-popup');
  }
  
  columnId!: string;

  createColumn(){
    console.log(this.Column.value);
    this.service.createColumn(this.board._id, this.Column.value)
    location.reload();
  }

  removeColumn(columnId: string){
    this.service.removeColumn(this.board._id, columnId);
    location.reload();
  }

  createTask(){
    this.service.createTask(this.board._id, this.columnId, this.Task.value);
    location.reload();
  }
  
  removeTask(columnId:string, taskId:string){
    this.service.removeTask(this.board._id, columnId, taskId);
    location.reload();
  }

}
