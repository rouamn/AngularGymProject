import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseServiceService } from 'src/Services/course-service.service';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss']
})
export class DetailCourseComponent {
  course: any;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseServiceService
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

}
