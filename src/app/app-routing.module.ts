import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MySelectMovieComponent} from './my-select-movie/my-select-movie.component';
import {MyForthFormComponent} from './my-forth-form/my-forth-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'select', pathMatch: 'full' },
  { path: 'select', component: MySelectMovieComponent },
  { path: 'update', component: MyForthFormComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
