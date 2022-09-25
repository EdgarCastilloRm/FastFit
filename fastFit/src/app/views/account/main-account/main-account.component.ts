import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main-account',
  templateUrl: './main-account.component.html',
  styleUrls: ['./main-account.component.css']
})
export class MainAccountComponent implements OnInit {

  constructor(private authService:SocialAuthService, private dataService: DataService, private router:Router) { 
  }

  userData = JSON.parse(localStorage.getItem("currentUser")|| '{}');

  ngOnInit(): void {
    console.log(this.userData)
  }

  signOut(): void {
    localStorage.clear();
    this.authService.signOut().
    then(() => this.router.navigate(['']));
  }
}
