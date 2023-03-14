import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';


@NgModule({
  declarations: [
    TaskListComponent
  ],
  exports: [
    TaskListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TaskListModule { }
