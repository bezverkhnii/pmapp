import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'http://localhost:3000/boards' 
  token = localStorage.getItem('token');

  constructor(private http:HttpClient) { }

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

  removeBoard(id:any){
    return this.http.delete(this.apiUrl + '/' + id)
  }
}
