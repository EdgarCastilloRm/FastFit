import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GarmentsComponent } from './garments/garments.component';
import { MainGarmentsComponent } from './main-garments/main-garments.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AngularMaterialsModule } from 'src/app/shared/angular-materials/angular-materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    GarmentsComponent,
    MainGarmentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AngularMaterialsModule,
    FlexLayoutModule,
  ]
})
export class GarmentsModule { }
