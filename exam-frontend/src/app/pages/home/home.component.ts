import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn = false;
  user = null;
  userRole = 'NORMAL';

  constructor(public login: LoginService) {}

  ngOnInit(): void {
    
  }

  ngOnChanges() : void {
    // this.isLoggedIn = this.login.isLoggedIn();
    // this.user = this.login.getUser();
    // this.userRole = this.login.getUserRole();
    // this.login.loginStatusSubject.asObservable().subscribe((data) => {
    //   this.isLoggedIn = this.login.isLoggedIn();
    //   this.user = this.login.getUser();
    // });
  }

}
