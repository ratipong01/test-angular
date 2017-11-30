import { Component, OnInit } from '@angular/core';

//import { TODOLIST } from '../list/mock-todolist';
import { ToDo } from '../list/todo';
import { ToDoService } from '../service/to-do.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  toDoList: ToDo[];
  //newToDo: ToDo = new ToDo();

  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
    this.getToDoList();
  }

  getToDoList() {
    this.toDoList = this.toDoService.getToDoList();
  }

  addToDo(text) {
    if(text.trim()) {
      this.toDoService.addToDo(text);
    }
  }

  deleteToDo(toDo) {
    this.toDoList = this.toDoService.deleteToDoById(toDo.id);
  }

  toggleToDo(toDo) {
    this.toDoService.toggleToDo(toDo);
  }

}
