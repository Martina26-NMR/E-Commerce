import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productService = inject(ProductsService);
  productList: Product[] = [];

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe({
      next: (Response) => {
        console.log(Response);
        this.productList = Response.data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
