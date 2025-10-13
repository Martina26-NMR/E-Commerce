import { Component } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-verfy-code',
  standalone: false,
  templateUrl: './verfy-code.component.html',
  styleUrl: './verfy-code.component.css'
})
export class VerfyCodeComponent {
  VerfyCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl("", Validators.required)
})

responseErrorMessage = '';
successMessage = '';
isLoading = false;


constructor(private authService: AuthService , private router: Router) {}

ngOnInit() {}

get resetCode() {
  return this.VerfyCodeForm.get('resetCode');
}


handleVerifyCode(){

    this.responseErrorMessage = '';
    this.successMessage = '';

    if (this.VerfyCodeForm.invalid) {
      this.resetCode?.markAsTouched(); // Show validation
      this.responseErrorMessage = 'Please enter a valid code.';
      return;
    }
     this.isLoading = true;

    this.authService.verifyCode(this.VerfyCodeForm.value).subscribe({
      next: (response) => { 
        this.isLoading = false;
        this.router.navigate(["/reset-password"])
        this.successMessage = '';
      },
    error: (err) => { 
      this.isLoading = false;
              this.responseErrorMessage = err.error?.message || 'An error occurred. Please try again.';
      }
    });

}
}