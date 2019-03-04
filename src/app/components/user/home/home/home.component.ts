import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/authservice/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    
  }

}
