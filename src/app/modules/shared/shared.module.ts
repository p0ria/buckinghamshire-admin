import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NZ_MODULES } from './nz-modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NZ_MODULES
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NZ_MODULES
  ]
})
export class SharedModule { }
