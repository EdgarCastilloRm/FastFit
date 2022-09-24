import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikedComponent } from './liked/liked.component';
import { MainLikedComponent } from './main-liked/main-liked.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AngularMaterialsModule } from 'src/app/shared/angular-materials/angular-materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    LikedComponent,
    MainLikedComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AngularMaterialsModule,
    FlexLayoutModule
  ]
})
export class LikedModule { }
