import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidtionPattern } from '../../core/validitons/Validtion-patterns';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  fb = new FormBuilder()
  constructor(
    private _loginService: LoginService,
    private _router: Router
  ) {
    this.initForm()
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      address: new FormControl(''),
      phone: new FormControl('+20', [Validators.required, Validators.pattern(ValidtionPattern.egyptionPhone)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(32)])
    });
  }
  ngOnInit(): void {

  }

  onSubmit() {
    this._loginService.login(this.loginForm.value);
    this._router.navigateByUrl('/')
  }

}
