import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegPageComponent } from './reg-page.component';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegPageComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatRippleModule,
    FormsModule
  ],
  exports: [
    RegPageComponent
  ]
})
export class RegPageModule { }
