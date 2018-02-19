import { ClashRoyaleService } from './clash-royale.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { XHRBackend, RequestOptions, Http, HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { HttpInterceptor } from './http-interceptor.service';

export function HttpInterceptorFactory(backend: XHRBackend, options: RequestOptions, router: Router, injector: Injector) {
  return new HttpInterceptor(backend, options, router, injector);
}

@NgModule({
  declarations: [
    AppComponent,
    SearchFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ClashRoyaleService,
    { provide: Http, useFactory: HttpInterceptorFactory, deps: [XHRBackend, RequestOptions, Router, Injector] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
