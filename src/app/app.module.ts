import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule  } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { CardComponent } from './Components/card/card.component';
import { CategoriseComponent } from './Components/categorise/categorise.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { WishListComponent } from './Components/wish-list/wish-list.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { VerfyCodeComponent } from './Components/verfy-code/verfy-code.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetialsComponent } from './Components/product-detials/product-detials.component';
import { ProductComponent } from './Components/product/product.component';
import { CategoriesSliderComponent } from './Components/categories-slider/categories-slider.component';
import { MainSliderComponent } from './Components/main-slider/main-slider.component';
import { authInterceptor } from './interceptors/auth.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { loadingInterceptor } from './interceptors/loading.interceptor';
import { ShippingAddressComponent } from './Components/shipping-address/shipping-address.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { SearchPipe } from './pipes/search.pipe';
import { ProfilesComponent } from './Components/profiles/profiles.component';
import { EtidUserInfoComponent } from './Components/etid-user-info/etid-user-info.component';
import { UpdateUserPasswordComponent } from './Components/update-user-password/update-user-password.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    ProductsComponent,
    CardComponent,
    CategoriseComponent,
    BrandsComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    WishListComponent,
    ForgetPasswordComponent,
    VerfyCodeComponent,
    ResetPasswordComponent,
    ProductDetialsComponent,
    ProductComponent,
    CategoriesSliderComponent,
    MainSliderComponent,
    ShippingAddressComponent,
    OrdersComponent,
    SearchPipe,
    ProfilesComponent,
    EtidUserInfoComponent,
    UpdateUserPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     ReactiveFormsModule,
     BrowserAnimationsModule,
     CarouselModule,
    NgxSpinnerModule,
       
  ],
  providers: [provideHttpClient(withInterceptors([authInterceptor, loadingInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
