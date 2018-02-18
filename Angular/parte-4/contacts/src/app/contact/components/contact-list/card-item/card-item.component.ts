import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../../models/contact';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  @Input() contact;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToDescription() {
    this.router.navigate([this.contact._id ], { relativeTo: this.route });
  }

}
