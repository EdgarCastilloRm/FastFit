import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InnerGuard } from './guards/inner.guard';
import { LoginGuard } from './guards/login.guard';
import { AccountComponent } from './views/account/account/account.component';
import { GarmentsComponent } from './views/garments/garments/garments.component';
import { GenerateComponent } from './views/generate/generate/generate.component';
import { HomeComponent } from './views/home/home/home.component';
import { LikedComponent } from './views/liked/liked/liked.component';
import { LoginMainComponent } from './views/login/login-main/login-main.component';

const routes: Routes = [
  {path: '', component: LoginMainComponent, canActivate: [LoginGuard]},
  {path: 'home', component: HomeComponent, canActivate: [InnerGuard]},
  {path: 'liked', component: LikedComponent, canActivate: [InnerGuard]},
  {path: 'generate', component: GenerateComponent, canActivate: [InnerGuard]},
  {path: 'garments', component: GarmentsComponent, canActivate: [InnerGuard]},
  {path: 'account', component: AccountComponent, canActivate: [InnerGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
