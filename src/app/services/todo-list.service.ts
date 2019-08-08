import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private todosLimit = 8;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
    private appService: AppService
  ) { }

  getTodos(): Observable<any> {
    return this.http.get(`${this.appService.apiUrl}/todos?_limit=${this.todosLimit}`, this.httpOptions);
  }

  updateTodo(todo: any): Observable<any> {
    return this.http.put(`${this.appService.apiUrl}/todos/${todo.id}`, todo, this.httpOptions);
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.appService.apiUrl}/todos/${id}`, this.httpOptions);
  }

  addTodo(todo: any): Observable<any> {
    return this.http.post(`${this.appService.apiUrl}/todos`, todo, this.httpOptions);
  }

}
