import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {

  task: Task;

  constructor(private taskService: TaskService) {
    this.task = new Task();
  }

  ngOnInit() {
  }

  addTask(task) {
    this.taskService.addTask(task);
  }

  saveForm(evento: Event) {
    this.task = new Task();
    this.task.name = evento.target[0].value;
    this.task.date = evento.target[1].value;
    this.addTask(this.task);
  }
}
