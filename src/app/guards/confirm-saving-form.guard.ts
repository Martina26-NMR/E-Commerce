import { CanDeactivateFn } from '@angular/router';
import { SignUpComponent } from '../Components/sign-up/sign-up.component';

export const confirmSavingFormGuard: CanDeactivateFn<SignUpComponent> = 
  (component: SignUpComponent) => {
    if (component.form && component.form.dirty && !component.isSubmitted) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
};
