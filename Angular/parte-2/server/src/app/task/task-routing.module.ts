import { TaskFormComponent } from './task-form/task-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskRemoveComponent } from './task-remove/task-remove.component';

const taskRoutes: Routes = [
  { path: '', component: TaskComponent,
  children: [
    { path: '', children: [
      { path: '', component: TaskListComponent },
      { path: 'new',  component: TaskFormComponent },
      { path: ':id',
      children: [
        { path: 'edit', component: TaskFormComponent },
        { path: 'delete', component: TaskListComponent }
      ]},
    { path: 'new', children: [
      { path: '',  component: TaskFormComponent, outlet: 'content' },
    ]},
    ]},
    // { path: 'new', component: TaskFormComponent, outlet: 'add' },
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
