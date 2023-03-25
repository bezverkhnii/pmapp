import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.css']
})
export class CreateBoardComponent {

  constructor(private service: CustomerService,
              private route: ActivatedRoute){}


  token = localStorage.getItem('token');

  parseJwt (token: any) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

  userData = this.parseJwt(this.token)

  Board = new FormGroup({
    title: new FormControl("", Validators.required),
    owner: new FormControl(`${this.userData.login}`, Validators.required),
    users: new FormControl(`${this.userData.login}`, Validators.required)
  });

  createBoard(){
    if (this.Board.valid) {
      console.log(this.route.snapshot.params['id'])
      console.log(this.Board.value)
      this.service.createBoard(this.Board.value);
      location.reload();
    }
  }
}
