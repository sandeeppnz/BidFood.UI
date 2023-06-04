import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './components/people/people-list/people-list.component';

const routes: Routes = [{
  path: '',
  component: PeopleListComponent
},
{
  path:'people',
  component: PeopleListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
