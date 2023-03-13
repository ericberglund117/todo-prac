import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'todo-practice-angular';
  tasks: string[] = [
    'Visit Ann',
    'Call Dad',
    'Go to the gym',
    'Wash the dishes',
    'Shop for the party'
  ];

  add = (newTask: string) => {
    this.tasks.push(newTask)
  }

  remove = (existingTask: string) => {
   let confirmation = confirm(`Are you sure you want to remove the following task? \n "${existingTask}"`)
   if (confirmation) this.tasks = this.tasks.filter(task => task !== existingTask)
  }

  done = (finishedTask: string) => {
    alert(`the task ${finishedTask} is done`)
  }
}

class Task {
  constructor(public title: string) {

  }
}
