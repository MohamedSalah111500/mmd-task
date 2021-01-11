import { Injectable } from '@angular/core';
import { GetXhrService } from '../core/services/GetXHR/get-xhr.service';
import { Store } from '@ngrx/store';
import { User } from '../modules/home/models/User';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _getXhrService: GetXhrService,
    private _store: Store<User>
  ) { }

  login(user: User): void {
    this._store.dispatch({ type: "LOGIN", payload: user })
    // return this._getXhrService.postData('users', user,'').pipe(share());
  }

}
