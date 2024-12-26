// free-collab-frontend/src/app/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Provide the service at the root level
})
export class ApiService {
  private apiUrl = 'http://localhost:5100/api/data'; // Ensure this matches your backend URL

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl); // Fetch data from the API
  }
}