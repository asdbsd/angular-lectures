import { AbstractControl } from "@angular/forms";

export const sameValueValidateFactory = (
    controlName: string,
    otherControl: AbstractControl,
    otherControlName: string
): Function => {
    return function sameValueValidate(
        control: AbstractControl
    ) {
        return control.value !== otherControl.value ? {
            sameValue: {
                [otherControlName]: otherControl.value,
                [controlName]: control.value
            }
        } : null
    }
}

