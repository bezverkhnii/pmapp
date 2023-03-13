import { Component, OnInit } from '@angular/core';

 
@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.css']
})
export class RegPageComponent implements OnInit {
  hide = true;

  name!: string;
  login!: string;
  password!: string;

  constructor() { }

  ngOnInit(): void {
  }

  url = 'http://localhost:3000/auth/signup';

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
      console.log('User created successfully');
    } else {
      console.error('Failed to create user');
    }
  })
  .catch(error => {
    console.error('Error creating user:', error);
  });
  }

}
