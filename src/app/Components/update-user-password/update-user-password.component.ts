import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user-password',
  standalone: false,
  templateUrl: './update-user-password.component.html',
  styleUrls: ['./update-user-password.component.css']
})
export class UpdateUserPasswordComponent {
 @ViewChild('updateUserPasswordForm') updateUserPasswordForm!: NgForm;


  responseErrorMessage = '';
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    console.log('Form Data:', form.value);

    if (form.valid && form.value.newPassword === form.value.confirmPassword) {
      this.isLoading = true;

      // Replace this with your real endpoint
      
      this.authService.updateUserPassword(form.value).subscribe({
        next: (res) => {

          this.isLoading = false;
          console.log('Password updated successfully:', res);
          this.router.navigate(['/home']);

console.log('Password updated successfully:', res);

// تفريغ الفورم
form.resetForm();
        },
        error: (err) => {
          this.isLoading = false;
          this.responseErrorMessage = err.error?.message || 'Something went wrong.';
          console.error('Error:', err);
        },
      });
    }
  }
}
