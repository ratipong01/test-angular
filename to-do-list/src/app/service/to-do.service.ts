import { Injectable } from '@angular/core';

import { TODOLIST } from '../list/mock-todolist';
import { ToDo } from '../list/todo';

@Injectable()
export class ToDoService {

  lastId: number = 3;
  toDoList: ToDo[] = TODOLIST;
  toDo: ToDo = new ToDo();

  constructor() { }

  getToDoList(): ToDo[] {
    return this.toDoList;
  }

  addToDo(text: string): ToDo[] {
    if(text.trim()) {
      if (!this.toDo.id) {
        this.toDo.id = ++this.lastId;
        this.toDo.text = text;
        this.toDo.date = Date.now();
        this.toDo.isChecked = false;
      }
      this.toDoList.push(this.toDo);
      this.toDo = new ToDo();
    }
    return this.toDoList;
  }

  deleteToDoById(id: number): ToDo[] {
    this.toDoList = this.toDoList
      .filter(toDo => toDo.id !== id);
    return this.toDoList;
  }

  toggleToDo(toDo: ToDo) {
      toDo.isChecked = !toDo.isChecked;
  }

}
