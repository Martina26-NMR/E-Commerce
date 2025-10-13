
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etid-user-info',
  standalone: false,
  templateUrl: './etid-user-info.component.html',
  styleUrl: './etid-user-info.component.css'
})
export class EtidUserInfoComponent {
  responseErrorMessage = '';
  isLoading = false;
  isSubmitted: boolean = false;

  @ViewChild('etidUserInfo', { static: true }) form!: NgForm;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(form: NgForm) {
    console.log('Form Data:', form.value);

    // Check if the form is valid before making the API call
    if (form.valid) {

      // loading state
      this.isLoading = true;

      this.authService.etidUserInfo(this.form.value).subscribe({
        next: (res) => {
          this.isLoading = false; // reset loading state
          console.log('Success', res);
            localStorage.setItem('userData', JSON.stringify(res.user));
          this.isSubmitted = true;

          alert('Your profile has been updated successfully!');
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.isLoading = false; // reset loading state
          console.log('Error', err.error);
          this.responseErrorMessage = err.error.message;
        },
      });
    }
  }

}
