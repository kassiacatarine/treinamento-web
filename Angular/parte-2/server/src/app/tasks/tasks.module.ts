import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListsComponent } from './task-lists/task-lists.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TaskListsComponent,
    TaskNewComponent,
    TaskComponent
  ],
  exports: [
    TaskListsComponent,
    TaskNewComponent
  ]
})
export class TasksModule { }
