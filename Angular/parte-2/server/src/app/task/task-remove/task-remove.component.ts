import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-task-remove',
  templateUrl: './task-remove.component.html',
  styleUrls: ['./task-remove.component.css']
})
export class TaskRemoveComponent implements OnInit {

  @Input() task: Task;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
  }

  deleteTask(task) {
    this.taskService.removeTask(task);
  }

}
