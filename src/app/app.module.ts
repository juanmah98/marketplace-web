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

@NgModule({
  declarations: [
    AppComponent
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
    ZingchartAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
