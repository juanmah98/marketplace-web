import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogiComponent } from './logi/logi.component';
import { SingComponent } from './sing/sing.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LogiComponent,
    SingComponent
  ],
  exports: [
    LogiComponent,
    SingComponent
   ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
