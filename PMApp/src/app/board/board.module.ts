import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { SideNavModule } from '../side-nav/side-nav.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    CommonModule,
    MatRippleModule,
    MatGridListModule,
    SideNavModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }
