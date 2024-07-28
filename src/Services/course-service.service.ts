import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  private apiUrl = 'https://localhost:7082/Cours/'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}GetAllCourses`);
  }

  addCourse(course: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'Insertcourse', course);
  }

  getCourseById(courseId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${courseId}`);
  }
}
