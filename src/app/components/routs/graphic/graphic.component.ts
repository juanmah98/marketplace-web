import { Component, OnInit } from '@angular/core';
import { GraphicService } from 'src/app/services/graphic.service';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {

  
  view: [number, number] = [1000, 400];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: any = 'Flowkai';
  color ='#5AA454';
 
  timeline: boolean = true;
  
  

  colorScheme:any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private graphicServices: GraphicService) {
   /*  Object.assign(this, { multi }); */
  }

 get multi(){
  return this.graphicServices.countriesData
 }

  random(){
  return this.graphicServices.randomData();
 }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {
  }

 

  

}
