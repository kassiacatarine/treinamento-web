import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-delete',
  templateUrl: './contact-delete.component.html',
  styleUrls: ['./contact-delete.component.css']
})
export class ContactDeleteComponent implements OnInit, OnDestroy {

  subscribe: Subscription;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.confirmDelete(params['id']);
    });
  }

  ngOnDestroy() {
    if (this.subscribe) { this.subscribe.unsubscribe(); }
  }

  confirmDelete(id): void {
    if (window.confirm('Tem certeza que deseja excluir esse contato?')) {
      this.subscribe = this.contactService.deleteContact(id).subscribe(data => console.log(data));
    }
  }
}
