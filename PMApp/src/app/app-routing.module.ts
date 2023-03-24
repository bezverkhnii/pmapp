import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegPageComponent } from './reg-page/reg-page.component'; 
import { TaskPopupComponent } from './task-popup/task-popup.component';
import { BoardpageComponent } from './boardpage/boardpage.component';
import { AuthGuard } from './shared/auth.guard';
import { BoardComponent } from './board/board.component';

const routes: Routes = [
  {component: MainPageComponent, path: '', canActivate: [AuthGuard]},
  {path: '', children: [
      {component: TaskPopupComponent, path: 'create-task'},
      {component: BoardpageComponent, path: 'boards'},
      {component: BoardComponent, path:'boards/:id'}
    ],canActivate: [AuthGuard]
  },
  {component: LoginComponent, path: 'login'},
  {component: RegPageComponent, path: 'register'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
