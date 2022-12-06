import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GraphicService } from 'src/app/services/graphic.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {

  
  view: [number, number] = [1000, 400];

  // options
  legend: boolean = true;
  legendTitle: string = 'Chart data'
  legendPosition = LegendPosition.Right;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  customColors = '#E44D25';
  autoScale: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: any = 'Flowkai';
  color ='#5AA454';

 
  timeline: boolean = true;
  
  

  colorScheme:any = {
    domain: ['#5AA454', '#E44D25', '#23A6F0', '#a8385d', '#a8385d', '#aae3f5']
  };

/*   mdq: MediaQueryList;
  mediaQueryListener:()=>void; */

  constructor(private graphicServices: GraphicService,  changeDetectorRef: ChangeDetectorRef, media: MediaMatcher ) {
   /*  Object.assign(this, { multi }); */
   
   setTimeout(() => {
   this.tamVentana()
   },1)

   
  }

 tamVentana() {
    var tam: [number, number]  = [0, 0];
    if (typeof window.innerWidth != 'undefined')
    {
      tam = [window.innerWidth / 1.6, window.innerHeight /  1.6];
    }
    else if (typeof document.documentElement != 'undefined'
        && typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0)
    {
      tam = [
         
        document.documentElement.clientWidth ,
          document.documentElement.clientHeight 
      ];
    }
    else   {
      tam = [
         
        document.getElementsByTagName('body')[0].clientWidth ,
          document.getElementsByTagName('body')[0].clientHeight
      ];
    }
    this.view = tam;
    if(tam[0] < 800){
      this.showXAxisLabel = false
      this.showYAxisLabel = false
      this.legendPosition = LegendPosition.Below;
    }else{
      this.showXAxisLabel = true
      this.showYAxisLabel = true
      this.legendPosition = LegendPosition.Right;
    }
    return tam;
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.tamVentana()
      this.ngOnInit()
      },1000)
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


 

  

}
