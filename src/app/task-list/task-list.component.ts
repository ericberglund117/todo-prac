import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    let date: Date =  new Date(this.route.snapshot.params['date']);
    console.log(date)
  }

  ngOnInit(): void {

  }
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
 }

 class Task {
   constructor(public title: string) {

   }

   toggleIsDone = () => {
     this.isDone = !this.isDone
   }

   public isDone = false;
 }

