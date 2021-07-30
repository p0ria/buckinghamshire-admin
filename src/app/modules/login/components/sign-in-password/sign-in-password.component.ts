import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { selectUser } from '@app/modules/auth/store/auth.selectors';
import { AuthService } from '@app/modules/core/services/auth.service';
import { RootState } from '@app/modules/store/root.state';
import { Store, select } from '@ngrx/store';
import { take } from 'rxjs/operators';

@Component({
  selector: 'bhs-sign-in-password',
  templateUrl: './sign-in-password.component.html',
  styleUrls: ['./sign-in-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInPasswordComponent implements OnInit {
  form: FormGroup;
  passwordVisible = false;

  constructor(
    private store: Store<RootState>,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
    this.store.pipe(
      select(selectUser),
      take(1)
    ).subscribe(user => {
      if (!user?.email) {
        this.router.navigate(['/login']);
      } else {
        this.form.patchValue({
          email: user.email
        })
      }
    })
  }

  submit = () => {
    this.updateFormValueAndValidity();
    if (this.form.valid) {
      alert('VALID');
    }
  }

  updateFormValueAndValidity = () => {
    for (const key in this.form.controls) {
      if (this.form.controls.hasOwnProperty(key)) {
        this.form.controls[key].markAsDirty();
        this.form.controls[key].updateValueAndValidity();
      }
    }
  }

  addWrongPasswordError = () => {
    this.form.get('password')!.setErrors({
      wrong: true
    })
  }

}
