import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import {MatDialog} from '@angular/material/dialog';
import { CreateBoardComponent } from '../create-board/create-board.component';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-boardpage',
  templateUrl: './boardpage.component.html',
  styleUrls: ['./boardpage.component.css']
})
export class BoardpageComponent implements OnInit {
  constructor(private customerService: CustomerService, private dialog: MatDialog,
    private router: Router, private activatedRoute: ActivatedRoute,
    public translate: TranslateService){  }
  boardsList:any = [];

  userData:any
  language:any = localStorage.getItem('language');

  ngOnInit(){
    this.customerService.getTasks();
    this.translate.use(this.language)
    const token = localStorage.getItem('token')
    function parseJwt (token: any) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
  
      return JSON.parse(jsonPayload);
  }
    fetch('', { headers:{ Authorization:`Bearer ${token}` } })
    this.userData = parseJwt(token);
    this.customerService.loadBoards().then(boards => {
      for(let i = 0; i < boards.length; i++){
        if(boards[i].owner != this.userData.login){
          continue;
        } else {
        this.boardsList.push(boards[i]);
        }
      }
    })
    .catch(error => console.log(error));
  }

  openDialog() {
    this.dialog.open(CreateBoardComponent, {
      height: '200px',
      width: '500px',
    });
  }


  loadBoard(boardId:any) {
    this.customerService.loadBoard(boardId).then(result => {
      this.customerService.chosenBoard = result;
      this.router.navigate([`${boardId}`], {relativeTo: this.activatedRoute});
    });
  }

  removeBoard(boardId:any) {
    this.customerService.removeBoard(boardId);
    location.reload();
}
}