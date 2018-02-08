import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterializeModule } from 'angular2-materialize';

import { TaskService } from './service/task.service';

import { TaskComponent } from './task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskRemoveComponent } from './task-remove/task-remove.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskOrderComponent } from './task-order/task-order.component';
import { TaskSearchComponent } from './task-search/task-search.component';

import { TaskRoutingModule } from './task-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterializeModule,
    TaskRoutingModule
  ],
  declarations: [
    TaskComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskAddComponent,
    TaskRemoveComponent,
    TaskEditComponent,
    TaskOrderComponent,
    TaskSearchComponent,
  ],
  exports: [
    TaskComponent
  ],
  providers: [TaskService]
})
export class TaskModule { }
