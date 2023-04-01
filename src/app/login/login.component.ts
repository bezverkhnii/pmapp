import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  messageclass = ''
  message = ''
  Customerid: any;
  editdata: any;
  responsedata: any;
  
  constructor(private service: AuthService,private router:Router,private _snackBar: MatSnackBar) {
    localStorage.clear();
  }
  Login = new FormGroup({
    login: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  ngOnInit(): void {
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  openSnackBar(response: string, answer: string): void {
    this._snackBar.open(response, answer, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000,
    });
  }

  ProceedLogin() {
  if (this.Login.valid) {
    this.service.ProceedLogin(this.Login.value).subscribe(
      result => {
        if (result != null) {
          this.responsedata = result;
          localStorage.setItem('token', this.responsedata.token);
          this.openSnackBar(`Welcome back, ${this.Login.value.login}!`, ':)')
          this.router.navigate([''])
        }
      },
      error => {
        if (error.status === 401) {
          this.openSnackBar(`Unauthorized access. Please check your login credentials.`, ':(')
        } else {
          this.openSnackBar(`An error occurred. Please try again later.`, ':(')
        }
      }
    );
  }
}

}