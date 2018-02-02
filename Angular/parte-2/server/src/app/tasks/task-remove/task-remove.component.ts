import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-remove',
  templateUrl: './task-remove.component.html',
  styleUrls: ['./task-remove.component.css']
})
export class TaskRemoveComponent implements OnInit {

  @Input() task: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  removeTask(task): void {
    this.taskService.removeTask(task);
  }
}
