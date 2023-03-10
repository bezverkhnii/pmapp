import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavModule } from '../side-nav/side-nav.module';
import { TaskPopupComponent } from './task-popup.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    TaskPopupComponent
  ],
  imports: [
    CommonModule,
    SideNavModule,
    MatDividerModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    TaskPopupComponent
  ]
})
export class TaskPopupModule { }
