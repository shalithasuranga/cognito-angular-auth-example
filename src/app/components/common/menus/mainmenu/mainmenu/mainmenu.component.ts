import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/authservice/auth.service';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss']
})
export class MainmenuComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.cognitoLogout();
  }

}
