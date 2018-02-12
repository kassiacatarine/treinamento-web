import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Task } from '../model/task';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-remove',
  templateUrl: './task-remove.component.html',
  styleUrls: ['./task-remove.component.css']
})
export class TaskRemoveComponent implements OnInit {

  @Input() task: Task;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
  }

  navigateDelete() {
    this.router.navigate([this.task.id, 'delete'], { relativeTo: this.route });
  }

  deleteTask() {
    if (confirm('Tem certeza que deseja excluir?')) {
      this.taskService.removeTask(this.task.id);
    }
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
