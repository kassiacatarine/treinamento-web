import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-order',
  templateUrl: './task-order.component.html',
  styleUrls: ['./task-order.component.css']
})
export class TaskOrderComponent implements OnInit {

  @Output() orderList = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitValue(selectValue) {
    this.orderList.emit(selectValue);
  }
}
