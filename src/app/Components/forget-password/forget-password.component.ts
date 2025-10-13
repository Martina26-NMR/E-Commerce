import { AuthService } from './../../services/auth.service'; 
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css',
  standalone: false
})
export class ForgetPasswordComponent implements OnInit {
  ForgetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email])
  });

  responseErrorMessage = '';
  successMessage = '';
  isLoading = false;

  constructor(private authService: AuthService , private router: Router) {}

  ngOnInit() {}

  get email() {
    return this.ForgetPasswordForm.get('email');
  }

  handleForgetPassword() {
    // Reset messages
    this.responseErrorMessage = '';
    this.successMessage = '';

    if (this.ForgetPasswordForm.invalid) {
      this.email?.markAsTouched(); // Show validation
      this.responseErrorMessage = 'Please enter a valid email address.';
      return;
    }

    this.isLoading = true;

    this.authService.forgetPassword(this.ForgetPasswordForm.value).subscribe({
      next: (response) => { 
        this.isLoading = false;
        this.router.navigate(["/verify-password"])
        this.successMessage = 'Verification code sent successfully. Check your email.';
      },
      error: (err) => {
 
        this.isLoading = false;
        this.responseErrorMessage = err.error?.message || 'An error occurred. Please try again.';
      }
    });
  }
}
