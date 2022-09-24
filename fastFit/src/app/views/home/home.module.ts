import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { AngularMaterialsModule } from 'src/app/shared/angular-materials/angular-materials.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    MainHomeComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialsModule,
    SharedModule
  ]
})
export class HomeModule { }
