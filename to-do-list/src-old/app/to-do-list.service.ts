import { Injectable } from '@angular/core';
import { TODOLISTS } from './mock-todolist';

@Injectable()
export class ToDoListService {

  constructor() { }

  getToDoList() {
    return TODOLISTS;
  }

}
