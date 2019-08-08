import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public userId = (-1);
  public apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor() { }
}
