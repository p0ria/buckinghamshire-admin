import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonLayoutComponent } from './components/common-layout/common-layout.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [
    CommonLayoutComponent
  ],
  imports: [
    SharedModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
