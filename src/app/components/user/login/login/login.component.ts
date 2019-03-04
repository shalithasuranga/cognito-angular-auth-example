import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/authservice/auth.service';
import { CognitoUserSession } from 'amazon-cognito-identity-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private errorMessage: string = '';

  private signInModel: any = {};

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.cognitoLogin(this.signInModel).then((result: CognitoUserSession) => {
      console.log(result);
      this.router.navigate(['']);

    }).catch((err) => {
      console.log(err);
      this.errorMessage = err.message;
    });
    
  }

}
