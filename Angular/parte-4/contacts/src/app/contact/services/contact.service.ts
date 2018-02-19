import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<any> {
    return this.http.get<Contact[]>('');
  }

  getContact(id): Observable<any> {
    return this.http.get<Contact>(`/${id}`);
  }

  addContact(contact): Observable<any> {
    return this.http.post<Contact>('', contact);
  }

  deleteContact(id) {
    this.http.delete(`/${id}`).subscribe();
  }

  updateContact(contact): Observable<any> {
    return this.http.put<Contact>(`/${contact._id}`, contact);
  }

}
