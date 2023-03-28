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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

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
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule
],
  exports:[
    MainPageComponent
  ]
})
export class MainPageModule { }
