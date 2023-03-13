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
}
