import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
})
export class SignupComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  onSignUp() {
    this.authService.signUp(this.username, this.password).subscribe(response => {
      console.log('User registered successfully');
    });
  }
}

