// free-collab-frontend/src/app/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'; // Import ApiService
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule] // Only import CommonModule here
})
export class HomeComponent implements OnInit {
  data: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe(response => {
      this.data = response; // Assign the response data to the component property
    });
  }
}