import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardpageComponent } from './boardpage.component';
import { SideNavModule } from '../side-nav/side-nav.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    BoardpageComponent
  ],
  imports: [
    CommonModule,
    SideNavModule,
    TranslateModule
  ],
  exports: [
    BoardpageComponent
  ]
})
export class BoardpageModule { }
