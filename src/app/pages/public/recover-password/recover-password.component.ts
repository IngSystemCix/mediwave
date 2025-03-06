import { passwordMatchValidator } from '@/utils/password-match.validator';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, type FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface RecoverPasswordFormProps {
  dni: FormControl<string>;
  codeVerification: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}

@Component({
  selector: 'app-recover-password',
  imports: [ReactiveFormsModule],
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecoverPasswordComponent {
  protected recoverPasswordForm: FormGroup<RecoverPasswordFormProps>;

  constructor(@Inject(FormBuilder) private fb: FormBuilder) {
    this.recoverPasswordForm = this.fb.nonNullable.group(
      {
        dni: new FormControl<string>('', {
          nonNullable: true,
          validators: [
            Validators.required,
            Validators.pattern(/^[0-9]{8}$/),
            Validators.maxLength(8),
          ],
        }),
        codeVerification: new FormControl<string>('', {
          nonNullable: true,
          validators: [
            Validators.required,
            Validators.pattern(/^[0-9]{6}$/),
            Validators.maxLength(6),
          ],
        }),
        password: new FormControl<string>('', {
          nonNullable: true,
          validators: [Validators.required, Validators.minLength(8)],
        }),
        confirmPassword: new FormControl<string>('', {
          nonNullable: true,
          validators: [Validators.required, Validators.minLength(8)],
        }),
      },
      { validators: passwordMatchValidator, updateOn: 'change' }
    );
  }

  getCodeVerification() {
    console.log('Código de verificación:');
  }
}
