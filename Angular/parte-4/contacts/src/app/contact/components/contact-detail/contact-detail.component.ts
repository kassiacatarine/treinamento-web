import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Contact } from '../../models/contact';
import { Subscription } from 'rxjs/Subscription';
import { ContactHttpService } from '../../services/contact-http.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit, OnDestroy {

  contact: Contact;

  subscribe: Subscription;

  constructor(
    private route: ActivatedRoute,
    private contactHttpService: ContactHttpService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getContact(params._id);
    });
  }

  ngOnDestroy() {
    if (this.subscribe) { this.subscribe.unsubscribe(); }
  }

  getContact(id) {
    if (!id) { return; }

    this.subscribe = this.contactService.getContact(id).subscribe((data) => {
      this.contact = data;
      console.log(this.contact);
    });
  }

}
