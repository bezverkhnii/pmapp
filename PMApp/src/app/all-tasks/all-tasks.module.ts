import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllTasksComponent } from './all-tasks.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AllTasksComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule
  ],
  exports: [ 
    AllTasksComponent
  ]
})
export class AllTasksModule { }
