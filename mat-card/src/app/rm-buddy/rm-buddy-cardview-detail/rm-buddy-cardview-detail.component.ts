import { Component, OnInit } from '@angular/core';
import { RmBuddy } from '../rm-buddy';
import { RMBUDDIES } from '../mock-rm-buddy';

@Component({
  selector: 'rm-buddy-cardview-detail',
  templateUrl: './rm-buddy-cardview-detail.component.html',
  styleUrls: ['./rm-buddy-cardview-detail.component.css']
})
export class RmBuddyCardviewDetailComponent implements OnInit {

  rmbuddies = RMBUDDIES;

  constructor() { }

  ngOnInit() {
  }

}
