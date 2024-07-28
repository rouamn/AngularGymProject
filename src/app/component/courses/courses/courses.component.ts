import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/Services/course-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses: any[] = [];

  constructor(private courseService: CourseServiceService,private router:Router) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data: any[]) => {
      this.courses = data;
    }, error => {
      console.error('Error fetching courses', error);
    });
  }


  goToComopnent(id:any){
    this.router.navigate(['course/',id])
  }

  goToAddCourse(){
    this.router.navigate(['component/add-course'])
  }
}
