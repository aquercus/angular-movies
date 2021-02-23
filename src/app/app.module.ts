import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import {HttpClientModule} from '@angular/common/http';
import { MyFirstFormComponent } from './my-first-form/my-first-form.component';
import { MySecondFormComponent } from './my-second-form/my-second-form.component';
import { MyThirdFormComponent } from './my-third-form/my-third-form.component';
import { MyInputFieldComponent } from './my-input-field/my-input-field.component';
import { MyForthFormComponent } from './my-forth-form/my-forth-form.component';
import { AppRoutingModule } from './app-routing.module';
import { MySelectMovieComponent } from './my-select-movie/my-select-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    MyFirstFormComponent,
    MySecondFormComponent,
    MyThirdFormComponent,
    MyInputFieldComponent,
    MyForthFormComponent,
    MySelectMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
