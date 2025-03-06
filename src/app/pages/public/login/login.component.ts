import { type AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder, type FormGroup } from '@angular/forms';
import { Inject } from '@angular/core';
import togglePassword from '@preline/toggle-password';

interface LoginFormProps {
  dni: FormControl<string>;
  digitVerification: FormControl<string>;
  birthdate: FormControl<string>;
  password: FormControl<string>;
  rememberMe: FormControl<boolean>;
}

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements AfterViewInit {
  protected loginForm: FormGroup<LoginFormProps>;

  constructor(@Inject(FormBuilder) private fb: FormBuilder) {
    this.loginForm = this.fb.nonNullable.group(
      {
        dni: new FormControl<string>('', {
          nonNullable: true,
          validators: [
            Validators.required,
            Validators.pattern(/^[0-9]{8}$/),
            Validators.maxLength(8),
          ],
        }),
        digitVerification: new FormControl<string>('', {
          nonNullable: true,
          validators: [
            Validators.required,
            Validators.pattern(/^[0-9]$/),
            Validators.maxLength(1),
          ],
        }),
        birthdate: new FormControl<string>('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
        password: new FormControl<string>('', {
          nonNullable: true,
          validators: [Validators.required, Validators.minLength(8)],
        }),
        rememberMe: new FormControl<boolean>(false, { nonNullable: true }),
      },
      { updateOn: 'change' }
    );
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulario válido:', this.loginForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }

  ngAfterViewInit() {
    togglePassword.autoInit();
  }

}
