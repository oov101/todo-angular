import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { TodoItemModel } from 'src/app/models/todo-item.model';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todos: Array<TodoItemModel>;

  constructor(
    private todoListService: TodoListService,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.todoListService.getTodos().subscribe(response => {
      this.todos = response;
      this.appService.userId = response[0].userId;
    });
  }

  onAddTodo(todoText: string) {
    const todo = {
      id: -1,
      userId: this.appService.userId,
      title: todoText,
      completed: false
    };

    this.todoListService.addTodo(todo).subscribe(response => {
      this.todos.unshift(response);
    });
  }

  onDeleteTodo(id: number) {
    this.todos.forEach((todo: TodoItemModel, index: number) => {
      if (todo.id === id) {
        this.todos.splice(index, 1);
      }
    });

    this.todoListService.deleteTodo(id).subscribe(response => {
      console.log('todoListServcie.deleteTodo() ', response);
    });
  }

  onUpdateTodo(todo: TodoItemModel) {
    console.log('onUpdateTodo() ', todo);

    this.todoListService.updateTodo(todo).subscribe(response => {
      console.log('todoListServcie.updateTodo() ', response);
    });
  }

}
