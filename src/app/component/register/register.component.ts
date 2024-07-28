import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: User = new User();

  constructor(private userService: UserService) {}



  register() {
    this.userService.registerUser(this.user).subscribe(
      response => {
        console.log(response.message);
        // Handle successful registration
        alert('User registered successfully!');
        // For example, redirect to login or home page:
        // this.router.navigate(['/login']);
      },
      error => {
        console.error(error);
        // Handle error
        alert('An error occurred during registration.');
      }
    );
  }
}
