import { Component, OnInit } from '@angular/core';
import { GraphicService } from 'src/app/services/graphic.service';

@Component({
  selector: 'app-graphic-two',
  templateUrl: './graphic-two.component.html',
  styleUrls: ['./graphic-two.component.css']
})
export class GraphicTwoComponent implements OnInit {

  constructor(private graphicServices: GraphicService,) {}

  ngOnInit(): void {
  }
  
  config2: ZingchartAngular.graphset = {
    type: 'line',
    
    title: {
      text: 'Dual yAxis Line Chart'
    },
    legend: {},
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
      
      "transform": {
        "type": "date",
        "all": "%D, %d %M<br />%h:%i %A",
        "item": {
          "visible": false
        }
      },
      "label": {
        "visible": false
      },
      "minor-ticks": 0
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
     
    },
    plot: {
      aspect: 'spline'
    },
    
    series: this.multi,
    
  };

 


  get multi(){
    return this.graphicServices.datosData
   }

   
}
