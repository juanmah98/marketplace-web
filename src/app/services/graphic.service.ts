import { Injectable } from '@angular/core';
import { Graphic } from '../interfaces/Graphics';
import { Datos } from '../interfaces/GraphicTwo';

interface Countrie {
  name:   string;
  series: Series[];
}

export interface Series {
  name:  Date;
  value: number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toCountrie(json: string): Countrie {
      return JSON.parse(json);
  }

  public static countrieToJson(value: Countrie): string {
      return JSON.stringify(value);
  }
}

@Injectable({
  providedIn: 'root'
})
export class GraphicService {

  /* constructor() { } */

  get countriesData(){
    return this.data
  }

  get datosData(){
    return this.datos
  }

  private datos: Datos[] = [

    {
      values: [1,2,3,4,5,6,7,8],
      text: 'Apple',
      scales: 'scale-x, scale-y-2',
    },
    {
      values: [0,2,4,6,8,9,7,6],
      text: 'Samsung',
      scales: 'scale-x, scale-y',
    },
    
    {
      values: [3,6,4,6,4,6,9,6],
      text: 'Xiaomi',
      scales: 'scale-x, scale-y-2',
    },
    {
      values: [6,7,8,4,3,2,1,0],
      text: 'Oppo',
      scales: 'scale-x, scale-y',
    },
    
  ]

  private data: Countrie[] = [
 
    
    {
        "name": "ABS:LEND_PERSONAL",
        "series": [
    
            {
            "name": new Date("2002-01"),
            "value": 40,
          },
          {
            "name": new Date("2002-02"),
            "value": 100,
          },
          {
            "name": new Date("2002-03"),
            "value": 200,
          },
          {
            "name": new Date("2002-04"),
            "value": 350,
          },
          {
            "name": new Date("2002-05"),
            "value": 400,
          },
          {
            "name":new Date("2002-06"),
            "value": 220,
          },
          {
            "name": new Date("2002-07"),
            "value": 237.5,
          },
          {
            "name": new Date("2002-08"),
            "value": 205.5,
          },
          {
            "name": new Date("2002-09"),
            "value": 300,
          },
          {
            "name": new Date("2002-10"),
            "value": 200,
          },
          {
            "name": new Date("2002-11"),
            "value": 700,
          },
          {
            "name": new Date("2002-12"),
            "value": 1000,
          }
        ]
      },
      {
        "name": "ABS:LEND_FAMILY",
        "series": [
    
            {
            "name": new Date("2002-01"),
            "value": 100,
          },
          {
            "name": new Date("2002-02"),
            "value": 200,
          },
          {
            "name": new Date("2002-03"),
            "value": 500,
          },
          {
            "name": new Date("2002-04"),
            "value": 350,
          },
          {
            "name": new Date("2002-05"),
            "value": 400,
          },
          {
            "name": new Date("2002-06"),
            "value": 140,
          },
          {
            "name": new Date("2002-07"),
            "value": 400,
          },
          {
            "name": new Date("2002-08"),
            "value": 500,
          },
          {
            "name": new Date("2002-09"),
            "value": 450,
          },
          {
            "name": new Date("2002-10"),
            "value": 350,
          },
          {
            "name": new Date("2002-11"),
            "value": 400,
          },
          {
            "name": new Date("2002-12"),
            "value": 600,
          }

          
        ]
      },
      {
        "name": "ABS:FIXED_TERM",
        "series": [
    
            {
            "name": new Date("2002-01"),
            "value": 1000,
          },
          {
            "name": new Date("2002-02"),
            "value": 700,
          },
          {
            "name": new Date("2002-03"),
            "value": 400,
          },
          {
            "name": new Date("2002-04"),
            "value": 800,
          },
          {
            "name": new Date("2002-05"),
            "value": 950,
          },
          {
            "name": new Date("2002-06"),
            "value": 650,
          },
          {
            "name": new Date("2002-07"),
            "value": 390,
          },
          {
            "name": new Date("2002-08"),
            "value": 770,
          },
          {
            "name": new Date("2002-09"),
            "value": 650,
          },
          {
            "name": new Date("2002-10"),
            "value": 300,
          },
          {
            "name": new Date("2002-11"),
            "value": 200,
          },
          {
            "name": new Date("2002-12"),
            "value": 180,
          }
        ]
      },
     
  ];


}
