import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './service/task.service';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskRemoveComponent } from './task-remove/task-remove.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TaskComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskAddComponent,
    TaskRemoveComponent,
    TaskEditComponent
  ],
  exports: [
    TaskComponent
  ],
  providers: [TaskService]
})
export class TaskModule { }
