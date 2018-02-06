import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-search',
  templateUrl: './task-search.component.html',
  styleUrls: ['./task-search.component.css']
})
export class TaskSearchComponent implements OnInit {

  @Output() valueSearch = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitValue(value) {
    this.valueSearch.emit(value);
  }
}
