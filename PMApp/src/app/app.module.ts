import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from './calendar/calendar.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodaysTaskModule } from './todays-task/todays-task.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { AllTasksModule } from './all-tasks/all-tasks.module';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule,
    FontAwesomeModule,
    TodaysTaskModule,
    MatGridListModule,
    AllTasksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
