import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseServiceService } from 'src/Services/course-service.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.scss']
})
export class UpdateCourseComponent implements OnInit {
  course: any = {
    nom: '',
    description: '',
    duree: ''
  };
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id');
    if (courseId) {
      this.courseService.getCourseById(+courseId).subscribe(
        data => {
          this.course = data;
        },
        error => {
          console.error('Error fetching course', error);
        }
      );
    }
  }

  updateCourse(): void {
    const courseId = this.route.snapshot.paramMap.get('id');
    if (courseId) {
      this.courseService.updateCourse(+courseId, this.course).subscribe(
        data => {
          this.message = 'Course updated successfully!';
          this.router.navigate(['component/courses']);
        },
        error => {
          console.error('Error updating course', error);
        }
      );
    }
  }

  goToComponent(): void {
    this.router.navigate(['component/courses']);
  }
}
