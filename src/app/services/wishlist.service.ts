import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishListProductIds = new BehaviorSubject<string[]>([])

  constructor(private _HttpClient: HttpClient) { 
    this.getUserWishlist().subscribe({
      next: (Response) => {
        console.log(Response)
      this.wishListProductIds.next((Response.data as Product[]).map((Product)=>Product._id))
      },
      error: (err) => { console.log(err) }
    })

  }
  addProductToWishlist(productId: string): Observable<any> {
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/wishlist",
      {
        productId: productId
      }
    )
  }
getUserWishlist(): Observable<any> {
    return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/wishlist" )
  }
removeProductWishlist(productId:string): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}` )
  }
}

