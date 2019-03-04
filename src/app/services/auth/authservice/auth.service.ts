import { Injectable } from '@angular/core';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  poolData = {
    UserPoolId: 'us-east-1_0LLDxBPzH',
    ClientId: '26h5klpgd1cquhdr939r1t1vd'
  };


  constructor() { }


  cognitoSignUp(signUpModel: any) {

    var userPool = new AmazonCognitoIdentity.CognitoUserPool(this.poolData);

    var attributeList = [];

    var dataName = {
      Name: 'name',
      Value: signUpModel.name
    };

    var dataWebsite = {
      Name: 'website',
      Value: signUpModel.website
    };

    var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataName);
    var attributeWebsite = new AmazonCognitoIdentity.CognitoUserAttribute(dataWebsite);
    attributeList.push(attributeEmail);
    attributeList.push(attributeWebsite);

    return new Promise((resolve, reject) => {
      userPool.signUp(signUpModel.email, signUpModel.password, attributeList, null, function (err, result) {
        if (err) {
          reject(err);
          return;
        }
        var cognitoUser = result.user;
        resolve(cognitoUser);
      });
    });


  }



  cognitoConfirm(signUpModel: any) {

    var userPool = new AmazonCognitoIdentity.CognitoUserPool(this.poolData);
    var confirmData = {
      Pool: userPool,
      Username: signUpModel.email
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(confirmData);

    return new Promise((resolve, reject) => {
      cognitoUser.confirmRegistration(signUpModel.code.toString(), true, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });
  }


  isLoggedIn() {
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(this.poolData);
    return !!userPool.getCurrentUser();
  }

  cognitoLogin(signInModel: any) {

    var authenticationData = {
      Username: signInModel.username,
      Password: signInModel.password,
    };
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

    var userPool = new AmazonCognitoIdentity.CognitoUserPool(this.poolData);
    var userData = {
      Username: signInModel.username,
      Pool: userPool
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    return new Promise((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result: any) {
          resolve(result);
        },

        onFailure: function (err: any) {
          reject(err);
        },

      });
    });

  }


  cognitoLogout() {
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(this.poolData);
    var cognitoUser = userPool.getCurrentUser();
    
    if(cognitoUser != null)
      cognitoUser.signOut();
  }

  getCognitoUsername() {
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(this.poolData);
    var cognitoUser = userPool.getCurrentUser();
    return cognitoUser.getUsername();
  }


}
