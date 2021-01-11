import { Component, OnDestroy, OnInit } from '@angular/core';
import { faPhone, faEnvelope, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CATEGORY } from 'src/app/modules/home/models/Category';
import { HeaderService } from '../../services/header.service';
import { CartService } from '../../../modules/home/services/cart.service';
import { Store } from '@ngrx/store';
import { User } from '../../../modules/home/models/User';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  // icons
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faUser = faUser;
  faCart = faShoppingCart;

  // data
  categories: CATEGORY;
  itemsLenth: number = 0;
  User:User 

  Subscription = new Subscription()

  constructor(
    private _headerService: HeaderService,
    private _cartsService: CartService,
    private _store: Store<User>
  ) {
    this.Subscription.add(this._cartsService.cartItemCount.subscribe(count => this.itemsLenth = count));
    this.Subscription.add(this._store.subscribe(user => this.User = user['userReducer'].user ));


    _store
  }
  ngOnInit(): void {
    this._headerService.getAllCategories().subscribe(item => {
      this.categories = item as CATEGORY;
    })
  }

  // unsubscribe all observables to  be garbage collectable for high peformanc ,no memory leaks
  ngOnDestroy() {
    this.Subscription.unsubscribe()
  }
}
