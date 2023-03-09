import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegPageComponent } from './reg-page/reg-page.component'; 

const routes: Routes = [
  {component: MainPageComponent, path: 'main'},
  {component: LoginPageComponent, path: 'login'},
  {component: RegPageComponent, path: 'register'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
