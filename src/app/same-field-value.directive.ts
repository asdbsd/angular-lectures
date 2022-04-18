import { Directive, Input, OnDestroy} from '@angular/core';
import { AbstractControl, NgForm, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';
import { sameValueValidateFactory } from './same-value-validation';

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
export class SameFieldValueDirective implements OnDestroy, Validator {

  @Input() appSameValue: string = '';
  @Input() name!: string;

  otherControl!: AbstractControl;
  subscription!: Subscription;

  constructor(private form: NgForm) {
  }

  // ngOnChanges(simpleChanges: SimpleChanges): void {
  //   if (simpleChanges['appSameValue']) {
  //     if (this.subscription) { this.subscription.unsubscribe(); }
  //     this.otherControl = this.form.controls['password'];
  //     this.subscription = this.control.valueChanges?.subscribe(() => {
  //       // this.control updateValueAndValidity({ onlySelf: true });
  //     })
  //   }
  // }

  validate(control: AbstractControl): ValidationErrors | null {
    const otherControl = this.form.controls['password'];
    if(this.subscription) { this.subscription.unsubscribe(); };
    this.subscription = otherControl.valueChanges.subscribe(() => {
      control.updateValueAndValidity({ onlySelf: true });
    });

    return sameValueValidateFactory(this.name, otherControl, this.appSameValue)(control);
  } 

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
