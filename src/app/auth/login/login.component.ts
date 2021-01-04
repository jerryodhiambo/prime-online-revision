import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  email: string;
  password: string;
  loading = false;

  signIn() {}

  ngOnInit(): void {}

  login() {
    this.loading = true;
    this.authService
      .SignIn(this.email, this.password)
      .then((res) => {
        this.loading = false;
        console.log('Successfully signed in!');
        this.router.navigate(['/backoffice']);
      })
      .catch((err) => {
        console.log('Something is wrong:', err.message);
      });
  }
}
