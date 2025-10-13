
import { Category } from '../../interfaces/category';
import { ProductsService } from './../../services/products.service';
import { Component, inject,OnInit } from '@angular/core';

@Component({
  selector: 'app-categorise',
  standalone: false,
  templateUrl: './categorise.component.html',
  styleUrl: './categorise.component.css'
})
export class CategoriseComponent {
   

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

