import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login/login.component';
import { HomeComponent } from './components/user/home/home/home.component';
import { MainmenuComponent } from './components/common/menus/mainmenu/mainmenu/mainmenu.component';
import { SignupComponent } from './components/user/signup/signup/signup.component';
import { AmplifyService, AmplifyAngularModule } from 'aws-amplify-angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MainmenuComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AmplifyAngularModule
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
