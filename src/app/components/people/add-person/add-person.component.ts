import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person.model';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
})
export class AddPersonComponent {
  person: Person = {
    id: 0,
    firstName: '',
    lastName: '',
  };
  errorMessage: string = '';
  addForm!: FormGroup;
  submitted = false;

  constructor(
    private personService: PeopleService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  addPerson() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }

    this.personService.addPerson(this.person).subscribe({
      next: (person) => {
        this.router.navigate(['people']);
        this.errorMessage = '';
      },
      error: (response) => {
        this.errorMessage = response.error;
      },
    });
  }
}
