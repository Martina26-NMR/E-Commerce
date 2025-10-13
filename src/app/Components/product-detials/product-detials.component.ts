import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-detials',
  standalone: false,
  templateUrl: './product-detials.component.html',
})
export class ProductDetialsComponent implements OnInit {

    customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  productDetails: any;

  constructor(private activatedRoute: ActivatedRoute , private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (params) => {
      this.productDetails = params.get('id');

        if (this.productDetails != null) 
          {
          this.productsService.getProductById(this.productDetails).subscribe({
            next:(response) => {console.log(response)
          this.productDetails = response.data;
        }
      })
    }
  }     
} );
  }
}
