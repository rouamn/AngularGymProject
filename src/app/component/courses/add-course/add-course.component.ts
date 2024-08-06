import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/Services/course-service.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {
  courseForm: FormGroup;
  message: string = '';

  constructor(
    private courseService: CourseServiceService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.courseForm = this.fb.group({
      Nom: ['', Validators.required],
      Description: [''],
      Duree: ['', Validators.required], // Add validation if needed
      InstructorName: [''],
      CourseDate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.courseForm.valid) {
      const courseData = this.courseForm.value;
      // Convert duration string to a proper format if needed
      // For example, you might need to convert HH:mm:ss to another format

      this.courseService.addCourse(courseData).subscribe(
        response => {
          this.message = response.Message;
          this.courseForm.reset();
          this.router.navigate(['component/courses']);
        },
        error => {
          console.error('Error adding course', error);
          this.message = 'Failed to add course';
        }
      );
    }
  }

  goToComponent() {
    this.router.navigate(['component/courses']);
  }

}
