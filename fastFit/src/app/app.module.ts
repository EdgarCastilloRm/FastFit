import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialsModule } from './shared/angular-materials/angular-materials.module';
import { LoginModule } from './views/login/login.module';
import { SharedModule } from './shared/shared/shared.module';
import { HomeModule } from './views/home/home.module';
import { AccountModule } from './views/account/account.module';
import { GarmentsModule } from './views/garments/garments.module';
import { GenerateModule } from './views/generate/generate.module';
import { LikedModule } from './views/liked/liked.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    HomeModule,
    AccountModule,
    GarmentsModule,
    GenerateModule,
    LikedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
