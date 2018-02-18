import { Contact } from './../../models/contact';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit, OnDestroy {

  contact: Contact;
  subscribe: Subscription;


  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getContact(params['id']);
    });
  }

  ngOnDestroy() {
    if (this.subscribe) { this.subscribe.unsubscribe(); }
  }

  getContact(id) {
    if (!id) { return; }

    this.subscribe = this.contactService.getContact(id).subscribe(
      data => { this.contact = data; console.log(this.contact); }
    );
  }


}
