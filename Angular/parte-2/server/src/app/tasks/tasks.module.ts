import { TaskService } from './task.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskListsComponent } from './task-lists/task-lists.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskRemoveComponent } from './task-remove/task-remove.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TaskListsComponent,
    TaskNewComponent,
    TaskRemoveComponent,
  ],
  providers: [ TaskService ],
  exports: [
    TaskListsComponent,
    TaskNewComponent
  ]
})
export class TasksModule { }
