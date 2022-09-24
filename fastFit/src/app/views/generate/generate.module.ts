import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateComponent } from './generate/generate.component';
import { MainGenerateComponent } from './main-generate/main-generate.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AngularMaterialsModule } from 'src/app/shared/angular-materials/angular-materials.module';



@NgModule({
  declarations: [
    GenerateComponent,
    MainGenerateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AngularMaterialsModule
  ]
})
export class GenerateModule { }
