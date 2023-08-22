import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/layout.module';
import { RoutsModule } from './components/routs/routs.module';
import { SharedModule } from './components/shared/shared.module';
import { LineChartModule, NgxChartsModule} from '@swimlane/ngx-charts';
import { ZingchartAngularModule } from 'zingchart-angular';
import { FormWitelistComponent } from './components/routs/form-witelist/form-witelist.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormWitelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    RoutsModule,
    HttpClientModule,
    NgxChartsModule,
    LineChartModule,
    BrowserAnimationsModule,
    ZingchartAngularModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
