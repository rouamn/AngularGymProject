import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticateRequest } from 'src/app/models/AuthenticateRequest';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:7082/User/';

  constructor(private http: HttpClient) { }


  registerUser(user: User): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}register`, user);
  }
  authenticate(request: AuthenticateRequest): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}authenticate`, request);
  }
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}AllUsers`);
  }

}
