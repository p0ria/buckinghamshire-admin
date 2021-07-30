import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: SignInComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
