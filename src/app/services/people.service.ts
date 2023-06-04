import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Person } from '../models/person.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  baseApiUri: string = environment.baseApiUri;

  constructor(private http: HttpClient) {}

  getAllPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseApiUri + '/api/people');
  }

  addPerson(person: Person) : Observable<Person>{
    return this.http.post<Person>(this.baseApiUri + '/api/people', person);
  }
}
