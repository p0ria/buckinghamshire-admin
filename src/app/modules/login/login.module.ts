import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { SignInComponent } from './components/sign-in/sign-in.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent
  ],
  imports: [
    SharedModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
