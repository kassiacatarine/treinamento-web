import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../model/task';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService) {
    taskService.taskCreated$.subscribe(task => {
      this.getTasks();
    });
  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.tasks = this.taskService.getTasks();
  }

}
