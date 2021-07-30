import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SignInEmailComponent } from './components/sign-in-email/sign-in-email.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SignInPasswordComponent } from './components/sign-in-password/sign-in-password.component';
@NgModule({
  declarations: [
    LoginComponent,
    SignInEmailComponent,
    SignInPasswordComponent
  ],
  imports: [
    SharedModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
