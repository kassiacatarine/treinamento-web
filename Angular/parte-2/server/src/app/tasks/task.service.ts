import { Injectable } from '@angular/core';
import { Task } from './task';


@Injectable()
export class TaskService {

  private tasks: Task[];

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
  }

  removeTask(task: Task): void {
    for (let i = 0; i < this.tasks.length; i++) {
      if (task == this.tasks[i]) {
        this.tasks.splice(i, 1);
        this.setLocalStorage(this.tasks);
      }
    }
  }
}
