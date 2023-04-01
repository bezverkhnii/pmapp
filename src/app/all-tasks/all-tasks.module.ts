import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllTasksComponent } from './all-tasks.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AllTasksComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    TranslateModule
  ],
  exports: [ 
    AllTasksComponent
  ]
})
export class AllTasksModule { }