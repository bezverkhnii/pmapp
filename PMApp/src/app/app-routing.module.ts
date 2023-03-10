import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegPageComponent } from './reg-page/reg-page.component'; 
import { KanbanViewComponent } from './kanban-view/kanban-view.component';
import { TaskPopupComponent } from './task-popup/task-popup.component';

const routes: Routes = [
  {component: MainPageComponent, path: 'main'},
  {component: LoginPageComponent, path: 'login'},
  {component: RegPageComponent, path: 'register'},
  {component: KanbanViewComponent, path: 'kanban-table'},
  {component: TaskPopupComponent, path: 'create-task'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
