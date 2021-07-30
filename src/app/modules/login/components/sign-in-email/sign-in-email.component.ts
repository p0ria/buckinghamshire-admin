import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actionAuthLoginEmailSuccess } from '@app/modules/auth/store/auth.actions';
import { AuthService } from '@app/modules/core/services/auth.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'bhs-sign-in-email',
  templateUrl: './sign-in-email.component.html',
  styleUrls: ['./sign-in-email.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInEmailComponent implements OnInit {
  form: FormGroup;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private authService: AuthService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      rememberMe: [null]
    })
  }

  ngOnInit(): void {

  }

  submit = () => {
    this.updateFormValueAndValidity();
    if (this.form.valid) {
      this.authService.checkEmailExists(this.form.value.email).subscribe(
        exists => {
          if (exists) {
            this.store.dispatch(actionAuthLoginEmailSuccess({ ...this.form.value }))
          } else {
            this.addEmailNotFoundError();
          }
        }
      )
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

  addEmailNotFoundError = () => {
    this.form.get('email')!.setErrors({
      notFound: true
    })
  }
}
