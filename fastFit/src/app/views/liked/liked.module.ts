import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikedComponent } from './liked/liked.component';
import { MainLikedComponent } from './main-liked/main-liked.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LikedComponent,
    MainLikedComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class LikedModule { }
