import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CustomerService } from '../service/customer.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  userData:any;
  language:any = localStorage.getItem('language')
  constructor(public translate: TranslateService,
              private service:CustomerService,
              private fb: FormBuilder,
              private router: Router){

  }


  ngOnInit(){
    this.initForm()
    this.translate.use(this.language)
    localStorage.setItem('language', 'en');
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
    localStorage.setItem('userId', this.userData.id);
  }

  
  searchText = '';
  userId = localStorage.getItem('userId')
  options: any[] = [];
  formGroup!: FormGroup;

  initForm(){
    this.formGroup = this.fb.group({
      'task' : ['']
    })
    this.formGroup.get('task')!.valueChanges
    .pipe(debounceTime(300))
    .subscribe(task => {
      this.searchForTask(task)
      if(task === 'object'){
        console.log('xd')
      } else {
        this.options = [];
      }
    })
  }

  loadTask(taskBoardId: string){
    this.router.navigate([`/boards/${taskBoardId}`]);
  }

  searchForTask(task:string){
    this.options = [];
    this.service.searchForTask(this.userId, task).then(response => {
      for(let i = 0; i < response.length; i++) {
        this.options.push(response[i]);
      }
    })
    return this.options;
  }

}