import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'https://boiling-dusk-17255.herokuapp.com/boards' 
  token = localStorage.getItem('token');
  constructor(private http:HttpClient, private route: ActivatedRoute) { }

  createBoard(board:any){
    fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      },
      body: JSON.stringify(board)
    })
    .then(response => response.json())
    .catch(error => console.error(error));
  }

  async loadBoards(){
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer ' + this.token
    //   })
    // };
    // return this.http.get(this.apiUrl, httpOptions);

    //WHY THIS IS DOESNT WORK?
    let data:any = [];
    try{
    const response = await fetch(this.apiUrl, { headers: { 'Authorization': 'Bearer ' + this.token } })
    data = await response.json();
    }catch (error){
      console.log(error)
    }
    return data;
}

  parseJwt (token: any) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  chosenBoard:any;

  async loadBoard(boardId: string){
    let board: any;
    try{
      const response = await fetch(this.apiUrl + '/' + boardId, { headers: { 'Authorization': 'Bearer ' + this.token } })
      board = await response.json();
      }catch (error){
        console.log(error)
      }
      return board;
  }

  removeBoard(boardId:any){
    fetch(`${this.apiUrl}/${boardId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      }
    })
    .then(response => {
      if(!response.ok){
        throw new Error('Network response was not ok')
      }
    })
    .catch(error => console.error(error));
  }
  
  createColumn(boardId:string, column:any){
    fetch(`${this.apiUrl}/${boardId}/columns`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      },
      body: JSON.stringify(column)
    })
    .then(response => response.json())
    .catch(error => console.error(error));
  }

  removeColumn(boardId: string, columnId: string){
    fetch(`${this.apiUrl}/${boardId}/columns/${columnId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      }
    })
    .then(response => {
      if(!response.ok){
        throw new Error('Network response was not ok')
      }
    })
    .catch(error => console.error(error));
  }

  createTask(boardId: string, columnId: string, task:any){
    fetch(`${this.apiUrl}/${boardId}/columns/${columnId}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      },
      body: JSON.stringify(task)
    })
    .then(response => response.json())
    .catch(error => console.error(error));
  }

  removeTask(boardId: string, columnId: string, taskId: string){
    fetch(`${this.apiUrl}/${boardId}/columns/${columnId}/tasks/${taskId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      }
    })
    .then(response => {
      if(!response.ok){
        throw new Error('Network response was not ok')
      }
    })
    .catch(error => console.error(error));
  }

  tasks:any = [];
  boards:any = [];

  async getTasks(){
    let data;
    let idArr = [];
    let colIds = [];
    try{
    const response = await fetch(this.apiUrl, { headers: { 'Authorization': 'Bearer ' + this.token } })
    data = await response.json();
    for(let board of data){
      idArr.push(board._id)
      this.boards.push(board)
    }
    console.log(idArr)
    }catch (error){
      console.log(error)
    }
    try {
      for(let i = 0; i < idArr.length; i++){
        const response:any = await fetch(`${this.apiUrl}/${idArr[i]}/columns`, { headers: { 'Authorization': 'Bearer ' + this.token } })
        data = await response.json();
        for(let column of data){
          colIds.push(column._id);
        }
      }
      console.log(colIds)
    }catch (error){
      console.log(error)
    }
    try {
      for(let j = 0; j < idArr.length; j++){
        for(let k = 0; k < colIds.length; k++){
          const response:any = await fetch(`${this.apiUrl}/${idArr[j]}/columns/${colIds[k]}/tasks`, { headers: { 'Authorization': 'Bearer ' + this.token } })
          data = response.json();
          data
            .then((value:any) => {
              if(value.statusCode === 404){
                
              } else {
                this.tasks.push(...value);
              }
            }
            );
        }
      }
      this.tasks = this.tasks.filter((item:string, index:number) => {
        return this.tasks.indexOf(item) === index;
      }).filter((e:any) => e.length !== 0).flat()
      console.log(this.tasks);
      console.log(this.boards);
    }catch (error){
      console.log(error)
    }
    }

    async searchForTask(userId:any, task:string){
      try{
        const response = await fetch(`https://boiling-dusk-17255.herokuapp.com/tasksSet?userId=${userId}&search=${task}`, { headers: { 'Authorization': 'Bearer ' + this.token } })
        let data = await response.json();
        return data;
        }catch (error){
          console.log(error)
        }
    }

  }

