import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from '../../interfaces/category';
import { ProductsService } from './../../services/products.service';
import { Component, inject,OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-slider',
  standalone: false,
  templateUrl: './categories-slider.component.html',
  styleUrl: './categories-slider.component.css'
})
export class CategoriesSliderComponent implements OnInit {

     customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: true,
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
          items: 7
        }
      },
      nav: false
    }

  ProductsService = inject(ProductsService);
  categorieslList:Category[] = [];

  ngOnInit(): void {
    this.ProductsService.getAllCategories().subscribe({
      next: (response:any) => {
        this.categorieslList = response.data;
      }
    })

}
}
