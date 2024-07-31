import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(private courseService: CourseServiceService, private fb: FormBuilder,private router:Router) {
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
          this.router.navigate(['component/courses']); 
        },
        error => {
          console.error('Error adding course', error);
          this.message = 'Failed to add course';
        }
      );
    }
  }

  goToComopnent(){
    this.router.navigate(['component/courses'])
  }

}
