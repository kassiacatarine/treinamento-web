import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Subscription } from 'rxjs/Subscription';
import { Contact } from '../../models/contact';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {

  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  contacts: Contact[];

  subscribe: Subscription;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.subscribe = this.contactService.getContacts().subscribe(
      data => this.contacts = data
    );
  }

  ngOnDestroy() {
    if (this.subscribe) { this.subscribe.unsubscribe(); }
  }

}
