import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  hide = true;

  login!: string;
  password!: string;

  constructor() { }

  ngOnInit(): void {
  }

  url = 'http://localhost:3000/auth/signin';

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
        console.log('User logged in successfully');
      } else {
        console.error('Failed to login user');
      }
    })
    .catch(error => {
      console.error('Error logging in user:', error);
    });
  }
}
