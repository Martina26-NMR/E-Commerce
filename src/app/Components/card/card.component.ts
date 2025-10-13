import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { CartResponse } from '../../interfaces/cart-response';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  cartDetials: CartResponse | null = null;
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getLoggedUserCard().subscribe({
      next: (response) => {
        console.log(response);
        this.cartDetials = response;
            console.log('Cart ID:', this.cartDetials?.data?._id);
            

      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  deleteCartItem(id: string) {
    this.cardService.RemoveSpecificCartItem(id).subscribe({
      next: (response:CartResponse) => { console.log(response)
        this.cartDetials = response;
        this.cardService.numOfCartItemsSubject.next(response.numOfCartItems)

       },
      error: (err) => { console.log(err) }
    })
  }

  updateProductQuatity(id:string , count:number) {
this.cardService.updateCartProductQuantity(id,count).subscribe({
      next: (response:CartResponse) => { console.log(response)
          this.cartDetials = response;
          this.cardService.numOfCartItemsSubject.next(response.numOfCartItems) 
       },

      error: (err) => { console.log(err) }
    })
  }

    clearCart(){
    this.cardService.RemoveAllCartItem().subscribe({
      next: (response) => { console.log(response)
         this.cartDetials = null;
        this.cardService.numOfCartItemsSubject.next(0)

       },
      error: (err) => { console.log(err) }
    })
  }
}



