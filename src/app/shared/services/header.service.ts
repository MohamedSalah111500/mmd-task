import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { GetXhrService } from '../../core/services/GetXHR/get-xhr.service';
import { CATEGORY } from '../../modules/home/models/Category';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private XhrServices: GetXhrService) { }

  getAllCategories():Observable<CATEGORY> {
    return this.XhrServices.getData('products/categories', '').pipe(share());
  }
}
