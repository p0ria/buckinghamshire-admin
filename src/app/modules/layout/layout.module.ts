import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonLayoutComponent } from './components/common-layout/common-layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { CommonLayoutHeaderComponent } from './components/common-layout-header/common-layout-header.component';

@NgModule({
  declarations: [
    CommonLayoutComponent,
    CommonLayoutHeaderComponent
  ],
  imports: [
    SharedModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
