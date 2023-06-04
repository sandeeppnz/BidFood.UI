import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './components/people/people-list/people-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPersonComponent } from './components/people/add-person/add-person.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    AddPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
