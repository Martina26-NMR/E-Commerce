import { Component, input, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

productList: Product[] =[]
searchTerm:string =''

constructor(private productService:ProductsService){}

ngOnInit(): void {
  this.productService.getAllProducts().subscribe({
    next:(response)=>{console.log(response)
      this.productList= response.data
    }
  })
}
}