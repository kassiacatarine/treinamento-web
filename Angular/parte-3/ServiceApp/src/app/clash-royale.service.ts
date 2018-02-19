import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../environments/environment';

@Injectable()
export class ClashRoyaleService {

  constructor(
    private http: Http
  ) { }

  getPlayer(search) {
    if (!search) {
      return null;
    }
    return this.http
      .get(`player/${search}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
