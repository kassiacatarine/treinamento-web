import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent implements OnInit {

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {
  }

  createContact(values) {
    this.contactService.addContact(values)
    .subscribe(data => console.log(data));
  }
}
