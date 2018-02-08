import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../model/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Input() task: Task;
  @Input() link: string;
  @Output() taskEmited = new EventEmitter();

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      console.log(params['id']);
      this.task = params['id'];
    });
  }

  saveData(form) {
    this.taskEmited.emit(form.value);
    this.resetForm(form);
  }

  resetForm(formTask) {
    formTask.reset();
  }
}
