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
  id: string;


  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      console.log(params['id']);
      this.id = params['id'];
    });
  }

  navigateDelete() {
    this.router.navigate([this.task.id, 'delete'], { relativeTo: this.route });
  }

  deleteTask() {
    if (confirm('Tem certeza que deseja excluir?')) {
      this.taskService.removeTask(this.id);
    }
    this.router.navigate(['/task'], { relativeTo: this.route });
  }
}
