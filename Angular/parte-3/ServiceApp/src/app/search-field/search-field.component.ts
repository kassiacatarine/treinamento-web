import { Component, OnInit, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ClashRoyaleService } from '../clash-royale.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit, OnDestroy {

  search: string;
  players: any[] = [];

  subscribe: Subscription;

  constructor(
    private clashRoyaleService: ClashRoyaleService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.subscribe) { this.subscribe.unsubscribe(); }
  }

  searchPlayer() {
    if (!this.search) { return; }

    this.subscribe = this.clashRoyaleService.getPlayer(this.search).subscribe((res) => {
      console.log(res);
      // this.users.push({ name: res.login, description: res.bio });
      // this.username.nativeElement.value = '';
    });
    console.log('fim do metodo');
  }
}
