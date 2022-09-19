import { Component, OnInit } from '@angular/core';
import { todo } from './../modules/to-do'

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  todos!: todo[];

  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First To Do',
        completed: false
  },
  {
        content: 'Second To Do',
        completed: false
      },
    ]
}

  toggleDone (id: number) {
    this.todos.map((v,i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo (id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
  })

  this.inputTodo = "";
  
}
}
