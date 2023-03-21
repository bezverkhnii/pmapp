import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kanban-view',
  templateUrl: './kanban-view.component.html',
  styleUrls: ['./kanban-view.component.css'],
})
export class KanbanViewComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  url = 'http://localhost:3000/boards';

  responsedata: any;

  ngOnInit() {
    let token = localStorage.getItem('token');
    fetch('http://localhost:3000/boards/6419f6602831470c8285e623', { headers:{ Authorization:`Bearer ${token}` } })
    .then(response => response.json())
    .then(data => {
      this.responsedata = data;
      console.log(data);
    })
    .catch(error => console.log(error));

    fetch('http://localhost:3000/boards/6419f6602831470c8285e623/columns', { headers:{ Authorization:`Bearer ${token}`}})
    .then(response => response.json())
    .then(data => {
      this.responsedata = data;
      console.log(data);
    })
    .catch(error => console.log(error));
  }
 }
