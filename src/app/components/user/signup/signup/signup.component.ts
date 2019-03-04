import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/authservice/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  private signUpModel = {};
  private errorMessage: string = '';
  private verificationMode = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signUp(){
    this.authService.cognitoSignUp(this.signUpModel).then((user: any) => {
      console.log(user);
      this.signUpModel = {
        email : this.signUpModel['email']
      };
      this.errorMessage = '';
      this.verificationMode = true;
    }).catch((error) => {
      this.errorMessage = error.message;
    });
  }

  confirmUser() {
    this.authService.cognitoConfirm(this.signUpModel).then((response) => {
      this.router.navigate(['login']);
    }).catch((error) => {
      this.errorMessage = error.message;
    });
  }

}
