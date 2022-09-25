import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserInfo } from 'src/app/models/basicUser';
import { DataService } from 'src/app/services/data.service';
import { SocialUser, SocialAuthService, MicrosoftLoginProvider } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})
export class LoginMainComponent implements OnDestroy {

  user: SocialUser = new SocialUser();
  basicInfo!: UserInfo;
  loggedIn: boolean = false; 
  authSub: Subscription = new Subscription;

  constructor(
    private authService: SocialAuthService,
    private dataService: DataService,
    private router: Router
  ) {
  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }

  signInMS(): void{
    this.authSub= this.authService.authState.subscribe({
      next: (res) => {
        this.user = res;
        if (this.user != null) {
          this.registerUser();
        }
        this.authService.signIn(MicrosoftLoginProvider.PROVIDER_ID);
      }
    });
  }

  registerUser(): void{
    var body = {
      Users_Name: this.user.firstName,
      Last_Name: this.user.lastName,
      Email: this.user.email,
    }
    this.dataService.registerUser(body).subscribe({
      next: (res) => {
        this.getUserData();
      }
    });
  }

  getUserData(){
    this.dataService.getUserData(this.user.email).subscribe({
      next: (response) => {
        this.basicInfo ={
          ID: response[0].ID,
          Users_Name: response[0].Users_Name,
          Last_Name: response[0].Last_Name,
          Email: response[0].Email
        },
        localStorage.setItem('currentUser', JSON.stringify(this.basicInfo));
        localStorage.setItem('token', JSON.stringify(this.user.authToken));
        this.router.navigate(['generate']);
      }, error:(err) => {
        alert("Error while fetching data.");
      }
    })
  }
}
