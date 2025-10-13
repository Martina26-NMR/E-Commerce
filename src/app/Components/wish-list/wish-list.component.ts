import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { Product } from '../../interfaces/product';
import { CardService } from '../../services/card.service';
import { CartResponse } from '../../interfaces/cart-response';


@Component({
  selector: 'app-wish-list',
  standalone: false,
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent implements OnInit {

  allWishlistProducts: Product[] = []
  cartDetials: CartResponse | null = null;

  constructor(private wishListService: WishlistService, private cartService: CardService ) { }

  ngOnInit(): void {
    this.getWishlistData();
  }

  getWishlistData() {
    this.wishListService.getUserWishlist().subscribe({
      next: (Response) => {
        console.log(Response)
        this.allWishlistProducts = Response.data;
      },
      error: (err) => { console.log(err) }
    })
  }

  addToCart(id: string) {
    this.cartService.addProductCard(id).subscribe({
      next: (response: CartResponse) => {
        console.log(response);
        this.cartService.numOfCartItemsSubject.next(response.numOfCartItems)
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  deleteWishlistItem(id: string) {
    this.wishListService.removeProductWishlist(id).subscribe({
      next: (response: CartResponse) => {
        console.log(response)
      this.wishListService.wishListProductIds.next(response.data);
        this.getWishlistData();
        
      },
      error: (err) => { console.log(err) }
    })
  }

}
