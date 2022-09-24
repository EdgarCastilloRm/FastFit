import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './views/account/account/account.component';
import { GarmentsComponent } from './views/garments/garments/garments.component';
import { GenerateComponent } from './views/generate/generate/generate.component';
import { HomeComponent } from './views/home/home/home.component';
import { LikedComponent } from './views/liked/liked/liked.component';
import { LoginMainComponent } from './views/login/login-main/login-main.component';

const routes: Routes = [
  {path: '', component: LoginMainComponent},
  {path: 'home', component: HomeComponent},
  {path: 'liked', component: LikedComponent},
  {path: 'generate', component: GenerateComponent},
  {path: 'garments', component: GarmentsComponent},
  {path: 'account', component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
