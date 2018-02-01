import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  tasks: Task[] = [];
  addTask(nameTask: string, dateTask: string) {
    if (nameTask && dateTask) {
      const task = new Task(nameTask, dateTask);
      this.tasks.push(task);
    }
  }
}
