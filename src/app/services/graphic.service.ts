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

  get datosData2(){
    return this.datos2
  }

  private datos: Datos[] = [

    {
      values: [
        [ "2002", 23 ],
  [ "2003", 10 ],
  [ "2004", 12 ],
  [ "2005", 1 ],
  ["2006", 20 ],
  [ "2007", 7 ],
  [ "2008", 10 ]
      ],
      text: 'Apple',
      scales: 'scale-x, scale-y',
    },
    {
      values: [
        [ "2002", 24 ],
  [ "2003", 20 ],
  [ "2004", 27 ],
  [ "2005", 29 ],
  ["2006", 25 ],
  [ "2007", 17 ],
  [ "2008", 15 ]
      ],
      text: 'Samsung',
      scales: 'scale-x, scale-y',
    },
    
    {
      values: [
        [ "2002", 10 ],
  [ "2003", 1 ],
  [ "2004", 20 ],
  [ "2005", 25 ],
  ["2006", 15 ],
  [ "2007", 11 ],
  [ "2008", 8 ]
      ],
      text: 'Xiaomi',
      scales: 'scale-x, scale-y',
    },
     {
      values: [
  [ "2002", 5 ],
  [ "2003", 10 ],
  [ "2004", 15 ],
  [ "2005", 20 ],
  ["2006", null ],
  [ "2007", 15 ],
  [ "2008", 5 ]
      ],
      text: 'Oppo',
      scales: 'scale-x, scale-y',
    }, 
     
  ]

  private datos2: Datos[] = [

    {
      values: [
        [ "2002", 23 ],
  [ "2003", 3 ],
  [ "2004", 5 ],
  [ "2005", 10 ],
  ["2006", 2 ],
  [ "2007", 7 ],
  [ "2008", 26 ]
      ],
      text: 'Nissan',
      scales: 'scale-x, scale-y',
    },
    {
      values: [
        [ "2002", 4 ],
  [ "2003", 20 ],
  [ "2004", 27 ],
  [ "2005", 24 ],
  ["2006", 25 ],
  [ "2007", 15 ],
  [ "2008", 2 ]
      ],
      text: 'Toyota',
      scales: 'scale-x, scale-y',
    },
    
    {
      values: [
        [ "2002", 1 ],
  [ "2003", 5 ],
  [ "2004", 20 ],
  [ "2005", 3 ],
  ["2006", 15 ],
  [ "2007", 11 ],
  [ "2008", 6 ]
      ],
      text: 'Bmw',
      scales: 'scale-x, scale-y',
    },
     {
      values: [
  [ "2002", 1 ],
  [ "2003", 4 ],
  [ "2004", 6 ],
  [ "2005", 20 ],
  ["2006", 6 ],
  [ "2007", 2 ],
  [ "2008", 5 ]
      ],
      text: 'Honda',
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
