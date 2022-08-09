import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
// import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    // MatTableModule,
  ]
})
export class MaterialModule { }
