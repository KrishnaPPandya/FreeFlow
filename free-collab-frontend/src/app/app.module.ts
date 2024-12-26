import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Import BrowserModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Import HomeComponent

@NgModule({
  declarations: [
    AppComponent, // Declare AppComponent
    HomeComponent // Declare HomeComponent
  ],
  imports: [
    BrowserModule, // Import BrowserModule
    HttpClientModule // Import HttpClientModule for HTTP requests
  ],
  providers: [], // Add any services you want to provide globally
  bootstrap: [AppComponent] // Bootstrap the AppComponent
})
export class AppModule { }