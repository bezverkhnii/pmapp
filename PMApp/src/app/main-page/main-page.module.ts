import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodaysTaskComponent } from '../todays-task/todays-task.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { AllTasksComponent } from '../all-tasks/all-tasks.component';
import { KanbanViewComponent } from '../kanban-view/kanban-view.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { MainPageComponent } from './main-page.component';


@NgModule({
  declarations: [
    SideNavComponent,
    CalendarComponent,
    KanbanViewComponent,
    AllTasksComponent,
    TodaysTaskComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    SideNavComponent
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
