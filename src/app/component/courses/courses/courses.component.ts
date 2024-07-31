// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { CourseServiceService } from 'src/Services/course-service.service';

// @Component({
//   selector: 'app-courses',
//   templateUrl: './courses.component.html',
//   styleUrls: ['./courses.component.scss']
// })
// export class CoursesComponent {
//   courses: any[] = [];

//   constructor(private courseService: CourseServiceService,private router:Router) { }

//   ngOnInit(): void {
//     this.courseService.getCourses().subscribe((data: any[]) => {
//       this.courses = data;
//     }, error => {
//       console.error('Error fetching courses', error);
//     });
//   }

//   deleteCourse(course: any): void {
//     this.courseService.deleteCourse(course.idCours).subscribe(response => {
//       if (response === 'success') {
//         this.courses = this.courses.filter(c => c.idCours !== course.idCours);
//       } else {
//         console.error('Failed to delete course');
//       }
//     });
//   }
//   goToComopnent(id:any){
//     this.router.navigate(['course/',id])
//   }
//   goToUpdateCourse(id:any){
//     this.router.navigate(['update-course/',id])
//   }

//   goToAddCourse(){
//     this.router.navigate(['component/add-course'])
//   }
// }



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
    this.courseService.deleteCourse(course.idCours).subscribe(response => {
      if (response === 'success') {
        this.courses = this.courses.filter(c => c.idCours !== course.idCours);
      } else {
        console.error('Failed to delete course');
      }
    }, error => {
      console.error('Error deleting course', error);
    });
  }

  goToComponent(id: any): void {
    this.router.navigate(['course', id]);
  }

  goToUpdateCourse(id: any): void {
    this.router.navigate(['update-course', id]);
  }

  goToAddCourse(): void {
    this.router.navigate(['component/add-course']);
  }
}
