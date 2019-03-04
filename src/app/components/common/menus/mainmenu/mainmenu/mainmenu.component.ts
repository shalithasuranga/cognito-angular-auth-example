import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/authservice/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss']
})
export class MainmenuComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.cognitoLogout();
    this.router.navigate(['login']);
  }

}
