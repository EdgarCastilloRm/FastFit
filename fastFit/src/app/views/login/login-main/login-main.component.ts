import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserInfo } from 'src/app/models/basicUser';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})
export class LoginMainComponent implements OnDestroy {

  // user: SocialUser = new SocialUser();
  basicInfo!: UserInfo;
  loggedIn: boolean = false; 
  authSub: Subscription = new Subscription;

  constructor(
    // private authService: SocialAuthService,
    // private dataService: DataService,
    private router: Router
  ) {
  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }

  signInGoogle():void{
    this.router.navigate(['home']);
  }

  // getUserData(){
  //   this.dataService.getUserData(this.user.email).subscribe({
  //     next: (response) => {
  //       this.basicInfo ={
  //         id_usr: response[0].id_usr,
  //         nombre_usr: response[0].nombre_usr,
  //         email: response[0].email,
  //         status: response[0].status,
  //         tipo_usr: response[0].tipo_usr
  //       }
  //       this.dataService.setJsonValue('currentUser', this.basicInfo);
  //       this.getToken();
  //     }
  //   })
  // }

  signInMS(): void{
    this.router.navigate(['home']);
  }
}
