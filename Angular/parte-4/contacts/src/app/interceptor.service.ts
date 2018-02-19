import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import * as _ from 'lodash';
import { environment } from '../environments/environment';


@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercepted request ... ');

    const options = new HttpHeaders();
    options.set('Content-Type', 'application/json');

    // Clone the request to add the new header.
    const request = req.clone({ headers: options, url: this.updateUrl(req.url) });

    return next.handle(request)
      .catch(errorResponse => {
        let errMsg: string;
        if (errorResponse instanceof HttpErrorResponse) {
            const err = errorResponse.message || JSON.stringify(errorResponse.error);
            errMsg = `${errorResponse.status} - ${errorResponse.statusText || ''} Details: ${err}`;
        } else {
            errMsg = errorResponse.message ? errorResponse.message : errorResponse.toString();
        }
        console.log(errorResponse.error.error);
        return Observable.throw(errMsg);
      });
  }

  updateUrl(url: string) {
    if (_.startsWith(url, 'assets') || _.startsWith(url, './assets') || _.startsWith(url, environment.apiUrl)) {
      return url;
    }
    return environment.apiUrl + url;
  }

}
