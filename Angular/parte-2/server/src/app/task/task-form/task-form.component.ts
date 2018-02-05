import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Input() task: Task;
  @Output() taskEmited = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  saveData(form) {
    this.taskEmited.emit(form.value);
    this.resetForm(form);
  }

  resetForm(formTask) {
    formTask.reset();
  }


}
