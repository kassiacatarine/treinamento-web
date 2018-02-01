import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task: Task[] = Array<Task>();

  constructor() { }

  ngOnInit() {
  }

  newTask(task): void {
    this.task.push(task);
  }

  removeTask(task): void {
    // Tem que achar a task
    this.task.pop();
  }
}
