import { Directive, Input } from '@angular/core';
import { AbstractControl, NgForm, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appSameFieldValue]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SameFieldValueDirective,
      multi: true
    }
  ]
})
export class SameFieldValueDirective implements Validator {

  @Input() appSameValue: string = '';
  @Input() name!: string;

  constructor(private form: NgForm) {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const otherFieldValue = this.form.controls['password']?.value;
    return control.value !== otherFieldValue ? {
      sameValue: {
        [this.appSameValue]: otherFieldValue,
        [this.name] : control.value
      }
    } : null
  } 

}
