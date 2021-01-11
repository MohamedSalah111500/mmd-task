import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LinksComponent } from './components/links/links.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';




@NgModule({
  declarations:
    [
      FooterComponent,
      HeaderComponent,
      SearchInputComponent,
      LinksComponent,
      EmptyStateComponent,
      LoadingSpinnerComponent
    ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    EmptyStateComponent,
    LoadingSpinnerComponent
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
