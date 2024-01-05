import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertyfyService } from 'src/app/services/alertyfy.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
  constructor(private auth: AuthService,
    private aletyfy:AlertyfyService,
    private router:Router){}

  ngOnInit(): void {
      
  }
  onLogin(loginForm:NgForm)
  {
    console.log(loginForm.value)
    const token = this.auth.authUser(loginForm.value)
    if(token)
    {
      localStorage.setItem('token',token.userName)
      this.aletyfy.successs("Login Sucessful")
      this.router.navigate(['/']);
    }
    else
    {
      this.aletyfy.error("User id or password is incorrect")
    }
  }
}
