import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  user: User = new User();
  message: string | null = null;

  constructor(private userService: UserService, private router: Router) { }

  addUser(): void {
    this.userService.addUser(this.user).subscribe(
      response => {
        this.message = response.message; // Display success message
        this.router.navigate(['component/users']); // Redirect to the users list or another page
      },
      error => {
        console.error('Error adding user', error);
      }
    );
  }

  goToComponent(): void {
    this.router.navigate(['component/users']); // Navigate back to the users list or another page
  }
}
