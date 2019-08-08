import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-adder',
  templateUrl: './todo-adder.component.html',
  styleUrls: ['./todo-adder.component.scss']
})
export class TodoAdderComponent implements OnInit {

  public model: any = {};

  @Output() public addTodo: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.addTodo.emit(this.model.todoText);
  }

}
