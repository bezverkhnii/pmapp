import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


 
@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.css']
})
export class RegPageComponent implements OnInit {
  hide = true;

  url = 'http://localhost:3000/auth/signup';

  name!: string;
  login!: string;
  password!: string;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(response: string, answer: string): void {
    this._snackBar.open(response, answer, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000,
    });
  }

  logInputValues(): void {
    let data = {
      name: this.name,
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
      this.openSnackBar('User created successfully', '✅');
    } else {
      this.openSnackBar('Failed to create user', '❌');
    }
  })
  .catch(error => {
    console.error('Error creating user:', error);
  });
  }

}
