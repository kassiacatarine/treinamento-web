import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<any> {
    return this.http.get<Contact[]>('contacts');
  }

  getContact(id): Observable<any> {
    return this.http.get<Contact>(`contacts/${id}`);
  }

  addContact(contact): Observable<any> {
    return this.http.post<Contact>('contacts', contact);
  }

  deleteContact(id): Observable<any> {
    return this.http.delete(`contacts/${id}`);
  }

  updateContact(contact): Observable<any> {
    return this.http.put<Contact>(`contacts/${contact._id}`, contact);
  }

}
