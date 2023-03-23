import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardpageComponent } from './boardpage.component';
import { SideNavModule } from '../side-nav/side-nav.module';


@NgModule({
  declarations: [
    BoardpageComponent
  ],
  imports: [
    CommonModule,
    SideNavModule
  ],
  exports: [
    BoardpageComponent
  ]
})
export class BoardpageModule { }
