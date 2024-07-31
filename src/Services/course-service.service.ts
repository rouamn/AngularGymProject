import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/Course';


@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  private apiUrl = 'https://localhost:7082/Cours/'; // Replace with your actual API URL

  constructor(private http: HttpClient ) { }

  getCourses(): Observable<any> {
    return this.http.get<Course>(`${this.apiUrl}GetAllCourses`);
  }

  addCourse(course: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'Insertcourse', course);
  }

  getCourseById(courseId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${courseId}`);
  }
  updateCourse(courseId: number, course: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}${courseId}`, course);
  }
  deleteCourse(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}${id}`);
  }
}
