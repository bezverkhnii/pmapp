import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanViewComponent } from './kanban-view.component';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { SideNavModule } from '../side-nav/side-nav.module';

@NgModule({
  declarations: [
    KanbanViewComponent
  ],
  imports: [
    CommonModule,
    MatRippleModule,
    MatGridListModule,
    SideNavModule
  ],
  exports: [
    KanbanViewComponent
  ]
})
export class KanbanViewModule { }