import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateComponent } from './generate/generate.component';
import { MainGenerateComponent } from './main-generate/main-generate.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AngularMaterialsModule } from 'src/app/shared/angular-materials/angular-materials.module';
import { FormsModule } from '@angular/forms';
import { TopFiveComponent } from './top-five/top-five.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    GenerateComponent,
    MainGenerateComponent,
    TopFiveComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AngularMaterialsModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class GenerateModule { }
