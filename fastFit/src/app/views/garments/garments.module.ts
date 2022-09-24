import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GarmentsComponent } from './garments/garments.component';
import { MainGarmentsComponent } from './main-garments/main-garments.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GarmentsComponent,
    MainGarmentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class GarmentsModule { }
