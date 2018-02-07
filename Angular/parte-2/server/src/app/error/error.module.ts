import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    ErrorRoutingModule,
  ],
  declarations: [
    PageNotFoundComponent,
  ], exports: [
    PageNotFoundComponent
  ]
})
export class ErrorModule { }
