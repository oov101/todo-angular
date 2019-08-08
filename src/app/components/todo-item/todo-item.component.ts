import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItemModel } from 'src/app/models/todo-item.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() public item: TodoItemModel;

  @Output() public deleteTodo: EventEmitter<any> = new EventEmitter();
  @Output() public updateTodo: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleClasses() {
    return {
      completed: this.item.completed
    };
  }

  onCheckboxToggle() {
    this.item.completed = !this.item.completed;

    this.updateTodo.emit(this.item);
  }

  onDeleteItem() {
    this.deleteTodo.emit(this.item.id);
  }

}
