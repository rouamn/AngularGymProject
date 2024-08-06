
import Swal from 'sweetalert2';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/Services/course-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];

  constructor(private courseService: CourseServiceService, private router: Router) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data: any[]) => {
      this.courses = data;
    }, error => {
      console.error('Error fetching courses', error);
    });
  }

  deleteCourse(course: any): void {
    // Show a confirmation dialog
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with deletion
        this.courseService.deleteCourse(course.idCours).subscribe(
          response => {
            Swal.fire(
              'Deleted!',
              'The course has been deleted.',
              'success'
            );
            this.courses = this.courses.filter(c => c.idCours !== course.idCours);
          },
          error => {
            console.error('Error deleting course', error);
            Swal.fire(
              'Error!',
              'An error occurred while deleting the course.',
              'error'
            );
          }
        );
      }
    });
  }


  goToComponent(id: any): void {
    this.router.navigate(['component/course', id]);
  }

  goToUpdateCourse(id: any): void {
    this.router.navigate(['component/update-course', id]);
  }

  goToAddCourse(): void {
    this.router.navigate(['component/add-course']);
  }
}
