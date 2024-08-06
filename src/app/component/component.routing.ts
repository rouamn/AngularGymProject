import { Routes } from '@angular/router';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';

import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { BadgeComponent } from './badge/badge.component';
import { NgbdButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { CoursesComponent } from './courses/courses/courses.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { DetailCourseComponent } from './courses/detail-course/detail-course.component';
import { LoginComponent } from './login/login.component';
import { UpdateCourseComponent } from './courses/update-course/update-course.component';
import { AddUserComponent } from './user/add-user/add-user.component';



export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'table',
				component: TableComponent
			},
			{
				path: 'abonnements',
				component: CardsComponent
			},
			{
				path: 'paiement',
				component: NgbdpaginationBasicComponent
			},
			{
				path: 'courses',
				component: CoursesComponent
			},
			{
				path: 'users',
				component: UserListComponent
			},
			{
				path: 'planning',
				component: NgbdDropdownBasicComponent
			},
			{
				path: 'nav',
				component: NgbdnavBasicComponent
			},
			{
				path: 'events',
				component: NgbdButtonsComponent
			},
			{
				path: 'add-course',
				component: AddCourseComponent
			},
      {
				path: 'course/:id',
				component: DetailCourseComponent
			},
      {
				path: 'update-course/:id',
				component: UpdateCourseComponent
			},
      {
				path: 'adduser',
				component: AddUserComponent
			},


		]
	}
];


