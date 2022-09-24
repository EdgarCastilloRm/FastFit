import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottombarComponent } from './bottombar/bottombar.component';
import { AngularMaterialsModule } from '../angular-materials/angular-materials.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BottombarComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialsModule,
    RouterModule
  ],
  exports: [
    BottombarComponent
  ]
})
export class SharedModule { }
