import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateComponent } from './generate/generate.component';
import { MainGenerateComponent } from './main-generate/main-generate.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GenerateComponent,
    MainGenerateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class GenerateModule { }
