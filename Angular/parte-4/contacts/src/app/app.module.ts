import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { Http, XHRBackend, RequestOptions, HttpModule } from '@angular/http';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpInterceptor } from './http-interceptor.service';
import { CoreModule } from './core/core.module';

export function HttpInterceptorFactory(backend: XHRBackend, options: RequestOptions, router: Router, injector: Injector) {
  return new HttpInterceptor(backend, options, router, injector);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    { provide: Http, useFactory: HttpInterceptorFactory, deps: [XHRBackend, RequestOptions, Router, Injector] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
