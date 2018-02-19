import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class TaskService {

  private tasks: Task[];
  private taskCreateSource = new Subject<Task>();

  taskCreated$ = this.taskCreateSource.asObservable();


  constructor() {
    this.tasks = [];
  }

  private getLocalStorage(): Task[] {
    return JSON.parse(localStorage.getItem('tasks'));
  }

  private setLocalStorage(tasks): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks(): Task[] {
    if (this.getLocalStorage() === null) {
      this.tasks = [];
    } else {
      this.tasks = this.getLocalStorage();
    }
    return this.tasks;
  }

  addTask(task: Task): void {
    const tasks = this.getTasks();
    tasks.push(task);
    this.setLocalStorage(tasks);
    this.taskCreateSource.next(task);
  }

  removeTask(id: string): void {
    for (let i = 0; i < this.tasks.length; i++) {
      if (id === this.tasks[i].id) {
        this.tasks.splice(i, 1);
        this.setLocalStorage(this.tasks);
      }
    }
  }

  updateTask(task: Task): void {
    this.tasks.filter(function(item) {
      if (item.id === task.id) {
        item.name = task.name;
        item.date = task.date;
        item.status = task.status;
        item.description = task.description;
      }
    });
    this.setLocalStorage(this.tasks);
  }

  getTask(id): any {
    this.getTasks();
    const task = this.tasks.filter(function(item) {
      return item.id === id;
    });
    return task[0];
  }
}
