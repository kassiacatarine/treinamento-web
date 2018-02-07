import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task.component';
import { TaskAddComponent } from './task-add/task-add.component';

const taskRoutes: Routes = [
  { path: 'task/list', component: TaskListComponent, pathMatch: 'full' },
  { path: 'task/new', component: TaskAddComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(taskRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TaskRoutingModule { }
