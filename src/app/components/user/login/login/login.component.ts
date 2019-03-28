import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/authservice/auth.service';
import { CognitoUserSession, CognitoUser } from 'amazon-cognito-identity-js';
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

    this.authService.cognitoLogin(this.signInModel).then((result: CognitoUser) => {

      this.errorMessage = '';
      console.log(result.getSignInUserSession().getAccessToken().getJwtToken());
      

    }).catch((err) => {
      this.errorMessage = err.message;
    });


  }

}
