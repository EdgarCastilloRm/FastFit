import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { MainAccountComponent } from './main-account/main-account.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AngularMaterialsModule } from 'src/app/shared/angular-materials/angular-materials.module';



@NgModule({
  declarations: [
    AccountComponent,
    MainAccountComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AngularMaterialsModule
  ]
})
export class AccountModule { }
