import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { NgbdButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from "./table/table.component";
import { CoursesComponent } from './courses/courses/courses.component';
import { UpdateCourseComponent } from './courses/update-course/update-course.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { DetailCourseComponent } from './courses/detail-course/detail-course.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbdpaginationBasicComponent,
    NgbdAlertBasicComponent,
    NgbdDropdownBasicComponent,
    NgbdnavBasicComponent,
    NgbdButtonsComponent,
    CardsComponent,
    TableComponent
  ],
  declarations: [
    CoursesComponent,
    UpdateCourseComponent,
    AddCourseComponent,
    DetailCourseComponent,
    RegisterComponent,
    LoginComponent
  ],
})
export class ComponentsModule { }
