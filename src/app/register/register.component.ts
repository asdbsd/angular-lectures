import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { sameValueValidateFactory } from '../same-value-validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6), Validators.required]],
      repeatPassword: ['', []]
    });

    const sameValueValidate = sameValueValidateFactory('repeatPassword', this.form.get('password')!,'password' )

    this.form.controls['repeatPassword'].setValidators([
      Validators.required, 
      Validators.minLength(6),
      sameValueValidate()
    ]);
  }



}
