// free-collab-frontend/src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Import BrowserModule
import {  provideHttpClient } from '@angular/common/http'; // Import HttpClientModule and provideHttpClient
import { RouterModule } from '@angular/router'; // Import RouterModule

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Import HomeComponent

@NgModule({
  declarations: [
    AppComponent, // Declare AppComponent
    HomeComponent // Declare HomeComponent
  ],
  imports: [
    BrowserModule, // Import BrowserModule // Import HttpClientModule for HTTP requests
    RouterModule.forRoot([]) // Import RouterModule for routing
  ],
  providers: [
    provideHttpClient(withFetch()) // Correctly provide HttpClient
  ],
  bootstrap: [AppComponent] // Bootstrap the AppComponent
})
export class AppModule { }