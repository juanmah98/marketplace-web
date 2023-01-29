import { Component, OnInit } from '@angular/core';
import { GraphicService } from 'src/app/services/graphic.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-graphic-two',
  templateUrl: './graphic-two.component.html',
  styleUrls: ['./graphic-two.component.css']
})
export class GraphicTwoComponent implements OnInit {

  change:boolean = false;
  loading:boolean = false;

  constructor(private graphicServices: GraphicService,) {}

  ngOnInit(): void {

    setTimeout(() => {
      this.loading = true
      },1000)
  }
  
   
axis2?:boolean;
yaxis2?:string;

  config2: ZingchartAngular.graphset = {
    type: 'line',
    
    title: {
      /* text: 'Dual yAxis Line Chart FLOWKAI' */
    },
    legend: {
      "layout": "float",
      "background-color": "none",
      "border-width": 0,
    
      "align": "center",
      "adjust-layout": true,
      "toggle-action": "remove",
      "item": {
        
        "cursor": "hand"
      }
    },
    "crosshair-x": {
      "line-color": "#efefef",
      "plot-label": {
        "border-radius": "5px",
        "border-width": "1px",
        "border-color": "#f6f7f8",
        "padding": "10px",
        "font-weight": "bold"
      },
      "scale-label": {
        "font-color": "#000",
        "background-color": "#f6f7f8",
        "border-radius": "5px",
        
      }
    },
    

    scaleY: {
      label: {
        text: 'yAxis 1' , 
        fontSize: '14px',
      },
      item: {
        fontColor: '#8E8E93'
      },
      lineColor: '#8E8E93',
      tick: {
        lineColor: '#8E8E93'
      },
      guide: {
        lineStyle: 'dotted',
        lineColor: '#8E8E93'
      }
    },

     scaleX: {
      
      /* "transform": {
        "type": "date",
        "all": "%D, %d %M<br />%h:%i %A",
        "item": {
          "visible": false
        }
      },
      "label": {
        "visible": false
      },
      "minor-ticks": 0 */
      zooming: true,
      // enable auto-date formatting
     /*  transform: {
        type: 'date',
      }, */
    
    }, 
    
        preview: {
      adjustLayout: true,
    }, 
    scaleY2: {
      
      label: {
        
        text: 'yAxis 2',
        fontSize: '14px',
        
      },
      item: {
        fontColor: 'black'
      },
     
      tick: {
        lineColor: 'black'
      },
      guide: {
        lineStyle: 'dotted',
        lineColor: 'black'
      },
      format: "%v%",
    //estamos estableciendo los valores de la escala Y2
    // en un rango de 0 a 100 con un incremento de 10, y especificando un valor máximo de 100.
   
      "values": this.yaxis2,
    "max-value": 100
     
    },
    plot: {
      aspect: 'spline'
    },
    
    series: this.multi,
    
  };



  get multi(){
    if(this.axis2!=false){
      this.yaxis2 = "";
      return this.graphicServices.datosData
    }
    else{
      let a =  this.graphicServices.datosData;
      a.forEach( b => {
        b.scales = 'scale-x, scale-y-2';
      })
      this.yaxis2 = "0:100:10";
      return a;
    }
   }

   reload(){
    window.location.reload();
   }
/*    get multi(){
      return this.graphicServices.datosData
   } */
   
}
