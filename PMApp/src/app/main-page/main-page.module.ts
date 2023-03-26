import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodaysTaskModule } from '../todays-task/todays-task.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { AllTasksModule } from '../all-tasks/all-tasks.module';
import { CalendarModule } from '../calendar/calendar.module';
import { SideNavModule } from '../side-nav/side-nav.module';
import { MainPageComponent } from '../main-page/main-page.component';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    TodaysTaskModule,
    MatGridListModule,
    AllTasksModule,
    CalendarModule,
    SideNavModule,
    MatIconModule,
    TranslateModule
],
  exports:[
    MainPageComponent
  ]
})
export class MainPageModule { }
