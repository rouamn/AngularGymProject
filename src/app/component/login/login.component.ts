import { Component } from '@angular/core';
import { AuthenticateRequest } from 'src/app/models/AuthenticateRequest';
import { User } from 'src/app/models/User';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService) {}

  login() {
    const request: AuthenticateRequest = {
      email: this.email,
      password: this.password
    };

    this.userService.authenticate(request).subscribe(
      response => {
        console.log('Authentication successful. Token:', response.token);
        localStorage.setItem('authToken', response.token);
        // Navigate to a different page or show a success message
        // this.router.navigate(['/home']);
      },
      error => {
        console.error('Authentication failed:', error);
        alert('Invalid email or password.');
      }
    );
  }

}
