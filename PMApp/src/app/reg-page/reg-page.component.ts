import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegService } from '../service/reg.service';


 
@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.css']
})
export class RegPageComponent implements OnInit {
  hide = true;

  responsedata:any;
  
  constructor(private service: RegService,
    private router:Router,
    private _snackBar: MatSnackBar) {
    localStorage.clear();
  }
  Register = new FormGroup({
    name: new FormControl("", Validators.required),
    login: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  ngOnInit(): void {
  }

  openSnackBar(response: string, answer: string): void {
    this._snackBar.open(response, answer, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000,
    });
  }

  
  ProceedRegister(){
    if(this.Register.valid){
      this.service.ProceedRegister(this.Register.value).subscribe(result => {
        if(result!=null){
          this.responsedata=result;
          console.log(result)
          this.openSnackBar(`User '${this.Register.value.name}' has been created succesfully`, 'cool!')
          this.router.navigate(['login']);
        }
      })
    }
  }
}
