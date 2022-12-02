import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AnswersComponent } from './answers/answers.component';
import { GraphicComponent } from './graphic/graphic.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    AnswersComponent,
    GraphicComponent,
    ComingSoonComponent
  ],
  exports:[
    AnswersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ]
})
export class RoutsModule { }
