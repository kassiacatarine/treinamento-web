import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  link = 'task/new';
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  addTask(data) {
    const task: Task = new Task(data.name, data.date);
    this.taskService.addTask(task);
  }
}
