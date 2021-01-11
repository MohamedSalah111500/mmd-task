import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {userReducer} from './store/userStore';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,   
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({userReducer:userReducer}),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
