import { Component, OnInit } from '@angular/core';
import { ToDoList } from '../todolist';
//import { TODOLISTS } from '../mock-todolist';
import { ToDoListService } from '../to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  toDoLists: ToDoList[];
  checkValue: boolean;

  constructor(private toDoListService: ToDoListService) { }

  ngOnInit() {
    this.getToDoList();
    this.checkValue = false;
  }

  getToDoList() {
    this.toDoLists = this.toDoListService.getToDoList();
  }

  checkboxValue() {
    if(!this.checkValue){
      this.checkValue = true;
    } else {
      this.checkValue = false;
    }
  }

}
