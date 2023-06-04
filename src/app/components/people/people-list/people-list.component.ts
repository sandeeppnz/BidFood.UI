import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model'
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];

  constructor(private peopleService: PeopleService) {}
  ngOnInit(): void {
    this.peopleService.getAllPeople()
    .subscribe({
      next: (people) => {
        this.people = people;
      },
      error: (response) => {
      }
    })
    this.people.push()
  }
}
