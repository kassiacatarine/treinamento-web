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
  constructor() { }

  ngOnInit() {
  }

}
