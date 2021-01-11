import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() product: Product;
  constructor( private _cartsService: CartService) { }

  ngOnInit(): void {
  }

  addProductToCart(){
    this._cartsService.addProduct(this.product)
  }

}
