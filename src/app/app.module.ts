import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsViewComponent } from './news-view/news-view.component';

const myRoute:Routes=[{path:"",component:NewsViewComponent}]

@NgModule({
  declarations: [
    AppComponent,
    NewsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(myRoute),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
