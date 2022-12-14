import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GraphicService } from 'src/app/services/graphic.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { LegendPosition } from '@swimlane/ngx-charts';
import { ActivatedRoute, ParamMap   } from '@angular/router';

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
  
  date = '';
  name = '';
  drop='';
titel = 'Graphic 1';
id: string = '';


  colorScheme:any = {
    domain: ['#5AA454', '#E44D25', '#23A6F0', '#a8385d', '#a8385d', '#aae3f5']
  };

/*   mdq: MediaQueryList;
  mediaQueryListener:()=>void; */

  constructor(private graphicServices: GraphicService,  changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private rutaActiva: ActivatedRoute ) {
   /*  Object.assign(this, { multi }); */
   
   setTimeout(() => {
   this.tamVentana()
   
   },1)

   
  }

  ngOnInit(): void {
    this.rutaActiva.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')!;

      
    });
    if(this.drop==''){
      this.drop = this.id
    }
    console.log("id: " + this.id)
    setTimeout(() => {
      this.tamVentana()
      this.ngOnInit()
      },1000)
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

 get multi(){
  return this.graphicServices.countriesData
 }

 get multi2(){
  return this.graphicServices.countriesData2
  this.titel = 'Graphic 2'
 }

 get multi3(){
  return this.graphicServices.countriesData3
 }

 dropD1(){
  this.drop = '1'
  this.titel = 'Graphic 1'
 }

 dropD2(){
  this.drop = '2'
  
 }

 dropD3(){
  this.drop = '3'
  this.titel = 'Graphic 1'
 }

 dropDown():any{
  switch(this.drop) { 
    case "1": { 
      this.titel = 'Graphic 1'
      return this.multi 
       break; 
    } 
    case "2": { 
      this.titel = 'Graphic 2'
     return this.multi2
       break; 
    } 
    case "3": { 
      this.titel = 'Graphic 3'
      return this.multi3
      break; 
   } 
    default: { 
      return this.multi 
       break; 
    } 
 } 

  
 }



 

/*   random(){
  return this.graphicServices.randomData();
 } */

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
     this.date = data.name; 
     this.name = data.series;
    console.log(this.name)
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
    console.log(this.drop)
   /*  this.name = data.value.name;
    console.log(this.name) */
   
  }

  onDeactivate(data:any): void {
    
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


 

  

}
