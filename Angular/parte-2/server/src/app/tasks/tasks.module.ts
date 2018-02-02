import { TaskService } from './task.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListsComponent } from './task-lists/task-lists.component';
import { TaskNewComponent } from './task-new/task-new.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TaskListsComponent,
    TaskNewComponent,
  ],
  providers: [ TaskService ],
  exports: [
    TaskListsComponent,
    TaskNewComponent
  ]
})
export class TasksModule { }
