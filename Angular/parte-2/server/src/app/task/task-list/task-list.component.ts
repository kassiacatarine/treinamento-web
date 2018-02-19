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

  getTasks(): void {
    this.tasks = this.taskService.getTasks();
    this.orderListName();
  }

  changeStatus(task): void {
    task.status = !task.status;
    this.taskService.updateTask(task);
  }

  orderListSelected(value): void {
    this.getTasks();
    if (value === '2') {
      this.tasks = this.tasks.filter(function(item) {
        return item.status !== true;
      });
    } else if (value === '3') {
      this.tasks = this.tasks.filter(function(item) {
        return item.status !== false;
      });
    }
  }

  orderListName(): void {
    this.tasks = this.tasks.sort(function(a, b) {
      return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
    });
  }

  searchTask(value) {
    if (value !== '') {
      this.tasks = this.tasks.filter(function(item) {
          return item.name.indexOf(value) !== -1;
      });
    } else {
      this.getTasks();
    }
  }
}
