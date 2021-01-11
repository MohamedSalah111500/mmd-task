import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Product } from '../models/Product';
import { Store } from '@ngrx/store';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];
  private cart = [];
  cartItemCount = new BehaviorSubject(0);

  Subscription = new Subscription();
  User: User

  constructor(private _store: Store) {
    this.Subscription.add(this._store.subscribe(user => this.User = user['userReducer'].user));

  }


  getProducts() {
    return this.products;
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  async resitCarCounter() {
    this.cart = [];
    await this.cartItemCount.next(0);
  }

  intiCarCounter(count) {
    this.cartItemCount.next(this.cartItemCount.value + count);
  }

  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(product);
      this.cartItemCount.next(this.cartItemCount.value + 1);
      this.setItemInLocalStorage(this.cart)
      added = false;
    }
    return added
  }



  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }


  setItemInLocalStorage(item) {
    localStorage.setItem(this.User.username, JSON.stringify(item));
  }

  // unsubscribe all observables to  be garbage collectable for high peformanc ,no memory leaks
  ngOnDestroy() {
    this.Subscription.unsubscribe()
  }


}
