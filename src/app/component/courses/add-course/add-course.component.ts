import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CourseServiceService } from 'src/Services/course-service.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {
  courseForm: FormGroup;
  message: string = '';

  constructor(private courseService: CourseServiceService, private fb: FormBuilder) {
    this.courseForm = this.fb.group({
      Nom: [''],
      Description: [''],
      Duree: ['']
    });
  }

  onSubmit() {
    if (this.courseForm.valid) {
      this.courseService.addCourse(this.courseForm.value).subscribe(
        response => {
          this.message = response.Message;
          this.courseForm.reset();
        },
        error => {
          console.error('Error adding course', error);
          this.message = 'Failed to add course';
        }
      );
    }
  }

}
