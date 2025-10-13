import { VerfyCodeComponent } from './Components/verfy-code/verfy-code.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { ProductsComponent } from './Components/products/products.component';
import { CardComponent } from './Components/card/card.component';
import { CategoriseComponent } from './Components/categorise/categorise.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { WishListComponent } from './Components/wish-list/wish-list.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { authGuard } from './guards/auth.guard';
import { noauthGuard } from './guards/no-auth.guard';
import { confirmSavingFormGuard } from './guards/confirm-saving-form.guard';
import { ProductDetialsComponent } from './Components/product-detials/product-detials.component';
import { ShippingAddressComponent } from './Components/shipping-address/shipping-address.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { ProfilesComponent } from './Components/profiles/profiles.component';
import { UpdateUserPasswordComponent } from './Components/update-user-password/update-user-password.component';
import { EtidUserInfoComponent } from './Components/etid-user-info/etid-user-info.component';



const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: 'full' },
  { path: 'home', canActivate: [authGuard], component: HomeComponent },
  { path: 'cart', canActivate: [authGuard], component: CardComponent },
  { path: 'wishlist', canActivate: [authGuard], component: WishListComponent },
  { path: 'products', canActivate: [authGuard], component: ProductsComponent },
  { path: 'categories', canActivate: [authGuard], component: CategoriseComponent },
  { path: 'brands', canActivate: [authGuard], component: BrandsComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'login', canActivate: [noauthGuard], component: LoginComponent },
  { path: 'forget-password', canActivate: [noauthGuard], component: ForgetPasswordComponent },
  { path: 'verify-password', canActivate: [noauthGuard], component: VerfyCodeComponent },
  { path: 'reset-password', canActivate: [noauthGuard], component: ResetPasswordComponent },
  { path: "product-details/:id", canActivate: [authGuard], component: ProductDetialsComponent },
  { path: "shipping-address/:id/:type", canActivate: [authGuard], component: ShippingAddressComponent },
  { path: 'allorders', canActivate: [authGuard], component: OrdersComponent },
  { path: 'profile', canActivate: [authGuard], component: ProfilesComponent , children:[{path:"", redirectTo:"update-user-password" , pathMatch:"full"},{path:"update-user-password", component:UpdateUserPasswordComponent},{path:"edit-user-info", component:EtidUserInfoComponent}] },


  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
