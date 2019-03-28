import { Injectable } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { BehaviorSubject, from } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn: BehaviorSubject<boolean>;

  constructor(private amplifyService: AmplifyService) {

    this.loggedIn = new BehaviorSubject<boolean>(false);
  }


  async cognitoSignUp(signUpModel: any) {
    console.log(signUpModel);
    return this.amplifyService.auth().signUp({
      username: signUpModel.email,
      password: signUpModel.password,
      attributes: {
        website: signUpModel.website,
        name: signUpModel.name
      }
    });

  }


  cognitoConfirm(signUpModel: any) {
    return this.amplifyService.auth().confirmSignUp(signUpModel.email, signUpModel.code.toString());
  }

  /** authorized **/
  isLoggedIn() {

    return from(this.amplifyService.auth().currentAuthenticatedUser())
      .pipe(
        map(result => {
          this.loggedIn.next(true);
          return true;
        }),
        catchError(error => {
          this.loggedIn.next(false);
          return of(false);
        })
      );

  }

  cognitoLogin(signInModel: any) {
    return this.amplifyService.auth().signIn(signInModel.username, signInModel.password);
  }


  cognitoLogout() {
    return this.amplifyService.auth().signOut(); 
  }

  getCognitoUsername() {
    //return this.amplifyService.auth().currentUserInfo();
  }


}
