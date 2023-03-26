import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SideNavComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    FormsModule
  ],
  exports: [
    SideNavComponent
  ]
})
export class SideNavModule { }
