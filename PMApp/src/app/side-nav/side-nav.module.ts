import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    SideNavComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule
  ],
  exports: [
    SideNavComponent
  ]
})
export class SideNavModule { }
