import { CardService } from './../../services/card.service';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false
})
export class LoginComponent {

  responseErrorMessage = '';
  isLoading = false;

  loginData = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router, private cartService: CardService
  ) { }

  handleLogin(form: NgForm) {
    if (form.valid) {
      this.isLoading = true;
      this.authService.login(this.loginData).subscribe({
        next: (res) => {
          console.log('Success', res);
          this.isLoading = false;
          form.resetForm();
   localStorage.setItem('applicationToken', res.token);

          const decodedToken: any = jwtDecode(res.token);
          const userName = decodedToken.name;

 
          this.authService.CurrentUserNameSubject.next(userName);


          this.authService.isLoggedIn.next(true);
          this.cartService.getUPdatedCartItemsNumber();


          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Error Message:', err.error?.message);
          console.error('Error Details:', err.error?.errors);

          this.responseErrorMessage = 'Login failed. Please check your credentials.';
          this.isLoading = false;
          form.resetForm();
        }
      });
    }
  }
}
