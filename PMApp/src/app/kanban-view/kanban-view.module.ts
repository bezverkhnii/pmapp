import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanViewComponent } from './kanban-view.component';
import {MatRippleModule} from '@angular/material/core';


@NgModule({
  declarations: [
    KanbanViewComponent
  ],
  imports: [
    CommonModule,
    MatRippleModule
  ],
  exports: [
    KanbanViewComponent
  ]
})
export class KanbanViewModule { }