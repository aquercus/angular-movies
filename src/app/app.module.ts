import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import {HttpClientModule} from '@angular/common/http';
import { MyFirstFormComponent } from './my-first-form/my-first-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    MyFirstFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
