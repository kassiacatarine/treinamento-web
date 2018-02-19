import { Component, OnInit, Output, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../model/task';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  title: string;
  task: Task;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      console.log(params['id']);
      this.setData(params['id']);
    });
  }

  saveData(form) {
    console.log(this.task);
    this.task ? this.editTask(form.value) : this.addTask(form.value);
    this.resetForm(form);
    this.router.navigate(['/task'], { relativeTo: this.route });
  }

  resetForm(formTask) {
    formTask.reset();
  }

  setData(id) {
    if (id === undefined) {
      this.title = 'Nova Tarefa';
    } else {
      this.title = 'Editar Tarefa';
      this.task = this.taskService.getTask(id);
    }
  }

  addTask(data) {
    const task: Task = new Task(data.name, data.date, data.description);
    this.taskService.addTask(task);
  }

  editTask(data) {
    this.task.name = data.name;
    this.task.date = data.date;
    this.task.description = data.description;
    this.taskService.updateTask(this.task);
  }
}
