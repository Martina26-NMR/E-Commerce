import { VerfyCodeComponent } from './../Components/verfy-code/verfy-code.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }


  isLoggedIn = new BehaviorSubject<boolean>(localStorage.getItem("applicationToken") ? true : false);

  SignUp(userData: any) {
    return this.httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup', userData);
  }
  login(loginobj: any): Observable<any> {
    return this.httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin', loginobj);
  }
  logout() {
    localStorage.removeItem('applicationToken');

    this.isLoggedIn.next(false);

    this.CurrentUserNameSubject.next(null);

    this.router.navigate(['/login']);
  }

  forgetPassword(form: any): Observable<any> {
    return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords", form);
  }

  verifyCode(form: any): Observable<any> {
    return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", form);
  }

  resetPassword(form: any): Observable<any> {
    return this.httpClient.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword ", form);
  }

  CurrentUserNameSubject = new BehaviorSubject<string | null>(this.getCurrentUserName());
  getCurrentUserName() {
    let token = localStorage.getItem("applicationToken");
    if (token) {
      let decodedToken: any = jwtDecode(token);
      return decodedToken.name
    }
    return null;

  }




updateUserPassword(formData: any): Observable<any> {
  const token = localStorage.getItem('applicationToken');

  return this.httpClient.put(
    'https://ecommerce.routemisr.com/api/v1/users/changeMyPassword',
    formData,
    {
      headers: {
        token: token || ''
      }
    }
  );
}


etidUserInfo(formData: any): Observable<any> {
  const token = localStorage.getItem('applicationToken');

  return this.httpClient.put(
    'https://ecommerce.routemisr.com/api/v1/users/updateMe/',
    formData,
    {
      headers: {
        token: token || ''
      }
    }
  );
}

}
