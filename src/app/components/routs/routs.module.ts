import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AnswersComponent } from './answers/answers.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    AnswersComponent
  ],
  exports:[
    AnswersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule
  ]
})
export class RoutsModule { }
