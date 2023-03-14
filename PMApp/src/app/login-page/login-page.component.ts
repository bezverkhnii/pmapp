import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  hide = true;
  
  url = 'http://localhost:3000/auth/signin';

  login!: string;
  password!: string;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar,
              private router: Router,
              private userDataService: UserDataService) { }

  ngOnInit(): void {
  }


  openSnackBar(response: string, answer: string): void {
    this._snackBar.open(response, answer, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000,
    });
  }

  logIn(): void{
    let data = {
      login: this.login,
      password: this.password,
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    fetch(this.url, options)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Invalid login or password');
      }
    })
    .then(data => {
      const token = data.token;
      this.openSnackBar('User logged in successfully!', '✅');
      this.userDataService.userData = { username: this.login };
      localStorage.setItem('token', token);
      this.router.navigate(['/main']);
    })
    .catch(error => {
      this.openSnackBar(error, '❌');
    });
  }
}
