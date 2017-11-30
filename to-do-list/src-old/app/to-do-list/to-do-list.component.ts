import { Component, OnInit } from '@angular/core';
import { ToDoList } from '../todolist';
import { TODOLISTS } from '../mock-todolist';
import { ToDoListService } from '../to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  toDoLists: ToDoList[];
  isChecked = false;

  constructor(private toDoListService: ToDoListService) { }

  ngOnInit() {
    this.getToDoList();
  }

  getToDoList() {
    this.toDoLists = this.toDoListService.getToDoList();
  }

  addItem(text: string) {
    this.toDoLists.push(4,text,Date.now(),false);
  }

  checkboxValue() {
    this.isChecked = !this.isChecked
    if(this.isChecked) {
      alert("a")
    }
  }

}
