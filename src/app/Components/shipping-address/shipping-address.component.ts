import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-shipping-address',
  standalone: false,
  templateUrl: './shipping-address.component.html',
  styleUrl: './shipping-address.component.css'
})
export class ShippingAddressComponent {

@Input() id!:string
@Input() type!:string

 ShippingAddressForm = new FormGroup({
  details :new FormControl('' , Validators.required),
  phone :new FormControl('' , Validators.required),
  city :new FormControl('' , Validators.required)
 })

   orderService=inject(OrderService)
   cartService=inject(CardService)
   router=inject(Router)

   redirectUserTopaymentPage(url:string){
    window.location.href = url;
   }

 onlinePayment(){
if(this.type == "cash")
  {
  this.orderService.cashOrder(this.ShippingAddressForm.value , this.id).subscribe({
  next:(Response)=>{console.log(Response);

  this.cartService.numOfCartItemsSubject.next(0);

  this.router.navigate(['/allorders'])
  },
  error:(err)=>{console.log(err);
     this.router.navigate(['/allorders'])
  }
  
})
}
else if (this.type == "card")
{
  this.orderService.checkoutSession(this.ShippingAddressForm.value , this.id).subscribe({
  next:(Response)=>{console.log(Response)
    this.redirectUserTopaymentPage(Response.session.url)
  },
  error:(err)=>{console.log(err)}
})
}


 }

}
 