import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'http://localhost:3000/boards' 
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

  removeBoard(id:any){
    return this.http.delete(this.apiUrl + '/' + id)
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

}
