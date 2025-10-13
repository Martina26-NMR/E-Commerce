
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  responseErrorMessage = '';
  isLoading = false;
  isSubmitted: boolean = false;



  @ViewChild('signUpForm', { static: true }) form!: NgForm;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(form: NgForm) {
    console.log('Form Data:', form.value);

    // Check if the form is valid before making the API call
    if (form.valid) {

      // loading state
      this.isLoading = true;

      this.authService.SignUp(form.value).subscribe({
        next: (res) => {
          this.isLoading = false; // reset loading state

          console.log('Success', res);

          this.isSubmitted = true;

          // navigate to another page or show a success message here
          this.router.navigate(['/login']);
        },

        error: (err) => {
          this.isLoading = false; // reset loading state

          console.log('Error', err.error);
         console.log('Full Error:', err);
this.responseErrorMessage = err.error?.message || 'An unexpected error occurred';

        },
      });
    }
  }


}