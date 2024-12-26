// free-collab-frontend/src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { HomeComponent } from './home/home.component'; // Import HomeComponent

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, HomeComponent] // Import RouterModule and HomeComponent
})
export class AppComponent {
  title = 'free-collab-frontend';
}