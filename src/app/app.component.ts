import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'todo-practice-angular';
  tasks: Task[] = [
   new Task('Visit Ann'),
   new Task('Call Dad'),
   new Task('Go to the gym'),
   new Task('Wash the dishes'),
   new Task('Shop for the party')
  ];

  add = (newTask: string) => {
    this.tasks.push(new Task (newTask))
  }

  remove = (existingTask: Task) => {
   let confirmation = confirm(`Are you sure you want to remove the following task? \n "${existingTask.title}"`)
   if (confirmation) this.tasks = this.tasks.filter(task => task !== existingTask)
  }

  done = (finishedTask: Task) => {
    alert(`the task ${finishedTask.title} is done`)
    finishedTask.isDone = true
  }
}

class Task {
  constructor(public title: string) {

  }

  public isDone = false;
}
