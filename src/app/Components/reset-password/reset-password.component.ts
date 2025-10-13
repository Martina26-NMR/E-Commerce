import { Component } from '@angular/core';
import { FormGroup, Validators,FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  standalone: false,
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {

  ResetPasswordForm:FormGroup= new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    newPassword:new FormControl("",[Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/)])
  })

  responseErrorMessage='';
  isLoading=false;

  constructor(private authService: AuthService, private router: Router) {}

  handleResetPassword() {
    if (this.ResetPasswordForm.valid) {
      this.isLoading = true;
      this.authService.resetPassword(this.ResetPasswordForm.value).subscribe({
        next: (res) => {
          console.log('Success', res);
          this.isLoading = false;
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Error Message:', err.error?.message);
          console.error('Error Details:', err.error?.errors);
          this.responseErrorMessage = `${err.error?.message || 'An error occurred while resetting the password.'}`;
          this.isLoading = false;
        }
      });
    }
  }

}