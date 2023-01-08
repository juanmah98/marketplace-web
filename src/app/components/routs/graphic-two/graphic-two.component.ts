import { Component, OnInit } from '@angular/core';
import { GraphicService } from 'src/app/services/graphic.service';

@Component({
  selector: 'app-graphic-two',
  templateUrl: './graphic-two.component.html',
  styleUrls: ['./graphic-two.component.css']
})
export class GraphicTwoComponent implements OnInit {

  config: ZingchartAngular.graphset = {
    type: "line",
    title: {
      text: "Logarithmic Scale"
    },
    'crosshair-x': {
      'plot-label': {
        text: "%t: %v m/s",
        
        'background-color': "white",
        'border-width': 1,
        'border-color': "gray",
        'border-radius': "5px",
        multiple: true
      },
      'scale-label': {
        text: "%v seconds",
        'font-color': "black",
        'background-color': "white",
        'border-width': 1,
        'border-color': "gray",
        'border-radius': "5px",
      },
      'line-color': "black",
      'line-width': 1
    },
    'scale-x': {
      values: "0:16:2",
      label: {
        text: "Time (s)"
      },
      item: {
        'font-size': 10
      },
      guide: {
        visible: true,
        'line-color': "black",
        'line-style': "dotted",
        alpha: 1
      }
    },
   
    plot: {
      aspect: "spline",
      tooltip: {
        visible: false
      }
    },
    plotarea: {
      'margin-left': "dynamic",
      'margin-bottom': "dynamic"
    },
    series: [
      {
        values: [
          [0,0],
          [2,5],
          [4,66],
          [6,230],
          [8,590],
          [10,1500],
          [12,9000],
          [14,40000],
          [16,660000]
        ],
        text: "Rocket A",
        'line-color': "#0066cc",
        marker: {
          type: "square",
          'background-color': "#0066cc"
        },
        'guide-label': {
          'font-color': "#0066cc"
        }
      },
      {
        values: [
          [0,100000],
          [2,600000],
          [4,30],
          [6,200],
          [8,1100],
          [10,5000],
          [12,31000],
          [14,99000],
          [16,350000]
        ],
        text: "Rocket B",
        'line-color': "#cc0000",
        marker: {
          type: "diamond",
          'background-color': "#cc0000"
        },
        'guide-label': {
          'font-color': "#cc0000"
        }
      },
      {
        values: [
          [0,200000],
          [2,300000],
          [4,14],
          [6,102],
          [8,3200],
          [10,32200],
          [12,111000],
          [14,311000],
          [16,500000]
        ],
        text: "Rocket B",
        'line-color': "#009933",
        marker: {
          type: "triangle",
          'background-color': "#009933"
        },
        'guide-label': {
          'font-color': "#009933"
        }
      }
    ]
  };
  
  config2: ZingchartAngular.graphset = {
    type: 'line',
    
    title: {
      text: 'Dual yAxis Line Chart'
    },
    legend: {},
    scaleY: {
      label: {
        text: 'Dataset 233' , 
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
    
    scaleY2: {
      label: {
        text: 'Dataset 2'
      },
      item: {
        fontColor: '#FAC35E'
      },
      lineColor: '#FAC35E',
      tick: {
        lineColor: '#FAC35E'
      },
      guide: {
        lineStyle: 'dotted',
        lineColor: '#FAC35E'
      }
    },
    plot: {
      aspect: 'spline'
    },
    
    series: [{
      values: [3,6,4,6,4,6,4,6],
    },
    {
      values: [1,2,4,6,8,9,4,3],
    }],
    
  };

  config3: ZingchartAngular.graphset = {
    type: "mixed", // 1. Specify your mixed chart type.
    plot: {
      tooltip: {
        text: "%t"
      }
    },
    series: [ // 2. Specify the chart type for each series object.
      {
        type: "area",
        values: [34, 70, 40, 75, 33, 50, 65],
        aspect: "stepped",
        'contour-on-top': false,
        text: "Area Chart"
      },
      {
        type: 'bar',
        values: [49, 30, 21, 15, 59, 51, 69],
        'bar-width': "50%",
        text: "Bar Chart"
      },
      {
        type: "line",
        values: [5, 9, 3, 19, 7, 15, 14],
        aspect: "spline",
        text: "Line Chart"
      }
    ]
  };
  constructor(private graphicServices: GraphicService,) { }

  ngOnInit(): void {
  }

  get multi(){
    return this.graphicServices.countriesData
   }
}
