import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { GetXhrService } from '../../../../core/services/GetXHR/get-xhr.service';
import { Product } from '../../models/Product';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  filterUseCategory = new EventEmitter<string>();
  serarchWord = new EventEmitter<string>();

  constructor(private XhrServices: GetXhrService) {}

  getAllProuducts():Observable<Product[]> {
    return this.XhrServices.getData('products', '').pipe(share());
  }

  getFilterdProuducts(cateName):Observable<Product[]> {
    return this.XhrServices.getData(`products/category/${cateName}`, '').pipe(share());
  }


  emetCategoryFilter(serarchWord:string):void{
    this.filterUseCategory.next(serarchWord)
  }

  
  emetSearchWord(serarchWord:string):void{
    this.serarchWord.next(serarchWord)
  }


}
