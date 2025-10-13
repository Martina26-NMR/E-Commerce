import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) {}

  checkoutSession(form: any, cartId: string): Observable<any> {
    // خدي التوكن من الـ localStorage أو المكان اللي بتحطيه فيه بعد الـ login
    const token = localStorage.getItem('userToken');

    const headers = new HttpHeaders({
      token: token || ''
    });

    console.log('Shipping Address:', form);
    console.log('Cart ID:', cartId);

    return this.httpClient.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      { shippingAddress: form },
      { headers }
    );
  }

   cashOrder(form: any, cartId: string): Observable<any> {
    return this.httpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
    {
       shippingAddress: form
    }
    ) 
   }
}
