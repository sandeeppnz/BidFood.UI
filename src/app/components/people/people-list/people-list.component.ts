import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model'

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [
    { id : 1, firstName : "Sandeep", lastName : "Perera"},
    { id :2, firstName : "First", lastName :"Last"}
  ];

  constructor() {}
  ngOnInit(): void {
    this.people.push()
  }
}
