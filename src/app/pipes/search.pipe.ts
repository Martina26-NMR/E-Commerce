import { Product } from './../interfaces/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: false
})
export class SearchPipe implements PipeTransform {

  transform(list: Product[] , term:string =''){

    return list.filter((Product)=>{return Product.title.toLowerCase().includes(term.toLowerCase())});
  }

}
