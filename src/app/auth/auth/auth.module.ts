import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { LoginRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    
    LoginRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,   
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AuthModule { }
