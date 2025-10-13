import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CardService {

numOfCartItemsSubject = new BehaviorSubject<number>(0);

constructor(private httpClient:HttpClient) { }


  
headers:any={token:localStorage.getItem('applicationToken')};

  

  addProductCard(id:string):Observable<any>{
    return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/cart", {productId:id});
  }

 getLoggedUserCard():Observable<any>{
   return this.httpClient.get("https://ecommerce.routemisr.com/api/v1/cart");
}

RemoveSpecificCartItem(id:string):Observable<any>{
   return this.httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`);
}

updateCartProductQuantity(id: string, count: number): Observable<any> {
  return this.httpClient.put(
    `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    { count: count }
  );
}

RemoveAllCartItem():Observable<any>{
   return this.httpClient.delete('https://ecommerce.routemisr.com/api/v1/cart');
}

getUPdatedCartItemsNumber()
{
  this.getLoggedUserCard().subscribe({
    next:(Response)=>{
      this.numOfCartItemsSubject.next(Response.numOfCartItems)
    }
  })
}

}
