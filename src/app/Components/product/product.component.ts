import { Component,Input, OnInit, inject } from '@angular/core';
import { Product } from '../../interfaces/product';
import { CardService } from '../../services/card.service';
import { WishlistService } from '../../services/wishlist.service';
import { CartResponse } from '../../interfaces/cart-response';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
@Input({required:true}) product!: Product;
cartService= inject(CardService);
wishlistService= inject(WishlistService);
wishlist: string[] = []; // هنا هنخزن IDs المنتجات اللي في الـwishlist
wishListProtuctsIdsList : string[] =[]

ngOnInit(): void {
  this.wishlistService.wishListProductIds.subscribe((idsList)=>this.wishListProtuctsIdsList =idsList )
}

addToCart(id:string){
this.cartService.addProductCard(id).subscribe({
  next:(response:CartResponse)=>{
    console.log(response);
    this.cartService.numOfCartItemsSubject.next(response.numOfCartItems)
  },
  error:(error)=>{
    console.log(error);
  }     
})
}

addToWishlist(productId: string){

  this.wishlistService.addProductToWishlist(productId).subscribe({
    next:(Response)=>{console.log(Response);
      this.wishlistService.wishListProductIds.next(Response.data);
    },
      error:(error)=>{
    console.log(error);
  }   
  })
}

isWishListProduct(id:string)
{
  return this.wishListProtuctsIdsList.includes(id)
}
}
