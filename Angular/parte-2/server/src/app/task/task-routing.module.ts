import { TaskFormComponent } from './task-form/task-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskRemoveComponent } from './task-remove/task-remove.component';

const taskRoutes: Routes = [
  { path: 'task', component: TaskComponent,
  children: [
    { path: '', component: TaskListComponent, children: [
      { path: ':id', pathMatch: 'prefix',
      children: [
        { path: 'edit', component: TaskFormComponent },
        { path: 'remove', component: TaskRemoveComponent }
      ]}
    ]},
    { path: 'new', component: TaskFormComponent },
  ]},
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
