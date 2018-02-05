import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  @Input() task: Task;

  constructor() { }

  ngOnInit() {
  }

  editTask(taskAltera, task) {
    task.name = taskAltera.name;
    task.date = taskAltera.date;
  }
}
