import { Component, OnInit } from '@angular/core';
import { AlertyfyService } from '../services/alertyfy.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  LoggedInUser :undefined;
  constructor(private alertyfy: AlertyfyService) { }

  ngOnInit() {
  }

  loggedin(){
    const tokenString: string | null = localStorage.getItem('token');
    this.LoggedInUser = tokenString ? JSON.parse(tokenString) : null;
    return this.LoggedInUser;
  }

  onLogout()
  {
    localStorage.removeItem('token')
    this.alertyfy.successs("You are Logged out")
  }

}
