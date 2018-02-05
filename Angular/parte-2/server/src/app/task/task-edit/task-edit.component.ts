import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../model/task';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  @Input() task: Task;
  link = 'modal-edit-task';
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  editTask(taskedited) {
    console.log(taskedited);
    this.task.name = taskedited.name;
    this.task.date = taskedited.date;
    this.taskService.updateTask(this.task);
  }
}
