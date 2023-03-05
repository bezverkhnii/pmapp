import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodaysTaskComponent } from './todays-task.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    TodaysTaskComponent
  ],
  imports: [
    CommonModule, 
    MatListModule, 
    MatDividerModule
  ],
  exports: [
    TodaysTaskComponent
  ]
})
export class TodaysTaskModule { }
