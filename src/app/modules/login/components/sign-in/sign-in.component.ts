import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@app/modules/core/services/auth.service';

@Component({
  selector: 'bhs-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {
  form: FormGroup;

  constructor(
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
