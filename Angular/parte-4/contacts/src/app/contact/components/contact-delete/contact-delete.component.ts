import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-delete',
  templateUrl: './contact-delete.component.html',
  styleUrls: ['./contact-delete.component.css']
})
export class ContactDeleteComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.confirmDelete(params);
    });
  }

  confirmDelete(contact): void {
    if (window.confirm('Tem certeza que deseja excluir esse contato?')) {
      console.log('Excluir contato ' + contact._id);
    }
  }
}
