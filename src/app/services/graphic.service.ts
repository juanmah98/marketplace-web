import { Injectable } from '@angular/core';
import { Graphic } from '../interfaces/Graphics';

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

  get countriesData2(){
    return this.data2
  }

  get countriesData3(){
    return this.data3
  }

  funtion(){
 const arreglo: Countrie[]=[];
  }

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
      {
        "name": "ABS:CAR_BUY",
        "series": [
    
            {
            "name": new Date("2002-01"),
            "value": 200,
          },
          {
            "name": new Date("2002-02"),
            "value": 220,
          },
          {
            "name": new Date("2002-03"),
            "value": 240,
          },
          {
            "name": new Date("2002-04"),
            "value": 260,
          },
          {
            "name": new Date("2002-05"),
            "value": 280,
          },
          {
            "name": new Date("2002-06"),
            "value": 300,
          },
          {
            "name": new Date("2002-07"),
            "value": 320,
          },
          {
            "name": new Date("2002-08"),
            "value": 340,
          },
          {
            "name": new Date("2002-09"),
            "value": 330,
          },
          {
            "name": new Date("2002-10"),
            "value": 310,
          },
          {
            "name": new Date("2002-11"),
            "value": 300,
          },
          {
            "name": new Date("2002-12"),
            "value": 290,
          }
        ]
      },  
  ];

  private data2: Countrie[] = [
 
    
    {
        "name": "ABS:COCA-COLA",
        "series": [
    
            {
            "name": new Date("2002-01"),
            "value": 200,
          },
          {
            "name": new Date("2002-02"),
            "value": 400,
          },
          {
            "name": new Date("2002-03"),
            "value": 450,
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
            "value": 500,
          },
          {
            "name": new Date("2002-07"),
            "value": 600,
          },
          {
            "name": new Date("2002-08"),
            "value": 900,
          },
          {
            "name": new Date("2002-09"),
            "value": 1000,
          },
          {
            "name": new Date("2002-10"),
            "value": 850,
          },
          {
            "name": new Date("2002-11"),
            "value": 920,
          },
          {
            "name": new Date("2002-12"),
            "value": 790,
          }
        ]
      },
      {
        "name": "ABS:PEPSI",
        "series": [
    
            {
            "name": new Date("2002-01"),
            "value": 700,
          },
          {
            "name": new Date("2002-02"),
            "value": 600,
          },
          {
            "name": new Date("2002-03"),
            "value": 800,
          },
          {
            "name": new Date("2002-04"),
            "value": 500,
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
            "value": 900,
          },
          {
            "name": new Date("2002-10"),
            "value": 700,
          },
          {
            "name": new Date("2002-11"),
            "value": 600,
          },
          {
            "name": new Date("2002-12"),
            "value": 450,
          }

          
        ]
      },
      {
        "name": "ABS:MIRINDA",
        "series": [
    
            {
            "name": new Date("2002-01"),
            "value": 8000,
          },
          {
            "name": new Date("2002-02"),
            "value": 600,
          },
          {
            "name": new Date("2002-03"),
            "value": 300,
          },
          {
            "name": new Date("2002-04"),
            "value": 600,
          },
          {
            "name": new Date("2002-05"),
            "value": 750,
          },
          {
            "name": new Date("2002-06"),
            "value": 850,
          },
          {
            "name": new Date("2002-07"),
            "value": 390,
          },
          {
            "name": new Date("2002-08"),
            "value": 570,
          },
          {
            "name": new Date("2002-09"),
            "value": 350,
          },
          {
            "name": new Date("2002-10"),
            "value": 400,
          },
          {
            "name": new Date("2002-11"),
            "value": 500,
          },
          {
            "name": new Date("2002-12"),
            "value": 650,
          }
        ]
      },
      {
        "name": "ABS:SPRITE",
        "series": [
    
            {
            "name": new Date("2002-01"),
            "value": 200,
          },
          {
            "name": new Date("2002-02"),
            "value": 220,
          },
          {
            "name": new Date("2002-03"),
            "value": 240,
          },
          {
            "name": new Date("2002-04"),
            "value": 260,
          },
          {
            "name": new Date("2002-05"),
            "value": 280,
          },
          {
            "name": new Date("2002-06"),
            "value": 300,
          },
          {
            "name": new Date("2002-07"),
            "value": 320,
          },
          {
            "name": new Date("2002-08"),
            "value": 440,
          },
          {
            "name": new Date("2002-09"),
            "value": 500,
          },
          {
            "name": new Date("2002-10"),
            "value": 400,
          },
          {
            "name": new Date("2002-11"),
            "value": 500,
          },
          {
            "name": new Date("2002-12"),
            "value": 600,
          }
        ]
      },  
  ];

  private data3: Countrie[] = [
 
    
    {
        "name": "ABS:OPPO",
        "series": [
    
            {
            "name": new Date("2002-01"),
            "value": 10,
          },
          {
            "name": new Date("2002-02"),
            "value": 900,
          },
          {
            "name": new Date("2002-03"),
            "value": 450,
          },
          {
            "name": new Date("2002-04"),
            "value": 500,
          },
          {
            "name": new Date("2002-05"),
            "value": 200,
          },
          {
            "name":new Date("2002-06"),
            "value": 400,
          },
          {
            "name": new Date("2002-07"),
            "value": 100,
          },
          {
            "name": new Date("2002-08"),
            "value": 800,
          },
          {
            "name": new Date("2002-09"),
            "value": 1000,
          },
          {
            "name": new Date("2002-10"),
            "value": 500,
          },
          {
            "name": new Date("2002-11"),
            "value": 400,
          },
          {
            "name": new Date("2002-12"),
            "value": 300,
          }
        ]
      },
      {
        "name": "ABS:XIAOMI",
        "series": [
    
            {
            "name": new Date("2002-01"),
            "value": 400,
          },
          {
            "name": new Date("2002-02"),
            "value": 600,
          },
          {
            "name": new Date("2002-03"),
            "value": 800,
          },
          {
            "name": new Date("2002-04"),
            "value": 500,
          },
          {
            "name": new Date("2002-05"),
            "value": 600,
          },
          {
            "name": new Date("2002-06"),
            "value": 220,
          },
          {
            "name": new Date("2002-07"),
            "value": 100,
          },
          {
            "name": new Date("2002-08"),
            "value": 400,
          },
          {
            "name": new Date("2002-09"),
            "value": 660,
          },
          {
            "name": new Date("2002-10"),
            "value": 700,
          },
          {
            "name": new Date("2002-11"),
            "value": 500,
          },
          {
            "name": new Date("2002-12"),
            "value": 700,
          }

          
        ]
      },
      {
        "name": "ABS:SAMSUNG",
        "series": [
    
            {
            "name": new Date("2002-01"),
            "value": 700,
          },
          {
            "name": new Date("2002-02"),
            "value": 800,
          },
          {
            "name": new Date("2002-03"),
            "value": 900,
          },
          {
            "name": new Date("2002-04"),
            "value": 600,
          },
          {
            "name": new Date("2002-05"),
            "value": 750,
          },
          {
            "name": new Date("2002-06"),
            "value": 850,
          },
          {
            "name": new Date("2002-07"),
            "value": 800,
          },
          {
            "name": new Date("2002-08"),
            "value": 600,
          },
          {
            "name": new Date("2002-09"),
            "value": 500,
          },
          {
            "name": new Date("2002-10"),
            "value": 400,
          },
          {
            "name": new Date("2002-11"),
            "value": 500,
          },
          {
            "name": new Date("2002-12"),
            "value": 650,
          }
        ]
      },
      {
        "name": "ABS:APPLE",
        "series": [
    
            {
            "name": new Date("2002-01"),
            "value": 200,
          },
          {
            "name": new Date("2002-02"),
            "value": 220,
          },
          {
            "name": new Date("2002-03"),
            "value": 240,
          },
          {
            "name": new Date("2002-04"),
            "value": 260,
          },
          {
            "name": new Date("2002-05"),
            "value": 280,
          },
          {
            "name": new Date("2002-06"),
            "value": 300,
          },
          {
            "name": new Date("2002-07"),
            "value": 320,
          },
          {
            "name": new Date("2002-08"),
            "value": 440,
          },
          {
            "name": new Date("2002-09"),
            "value": 500,
          },
          {
            "name": new Date("2002-10"),
            "value": 400,
          },
          {
            "name": new Date("2002-11"),
            "value": 500,
          },
          {
            "name": new Date("2002-12"),
            "value": 600,
          }
        ]
      },  
  ];
  

/*   randomData(){
    this.data = [
  
     {
       
       "name": "Germany",
       "series": [
         {
           "name": "1990",
           "value": Math.random() * 100000000
         },
         {
           "name": "2010",
           "value": Math.random() * 100000000
         },
         {
           "name": "2011",
           "value": Math.random() * 100000000
         }
       ]
     },
   
     {
       "name": "USA",
       "series": [
         {
           "name": "1990",
           "value": Math.random() * 100000000
         },
         {
           "name": "2010",
           "value": Math.random() * 100000000
         },
         {
           "name": "2011",
           "value": Math.random() * 100000000
         }
       ]
     },
   
     {
       "name": "France",
       "series": [
         {
           "name": "1990",
           "value": Math.random() * 100000000
         },
         {
           "name": "2010",
           "value": Math.random() * 100000000 
         },
         {
           "name": "2011",
           "value": Math.random() * 100000000
         }
       ]
     },
     {
       "name": "Argentina",
       "series": [
         {
           "name": "1990",
           "value": Math.random() * 100000000
         },
         {
           "name": "2010",
           "value": Math.random() * 100000000
         },
 
         {
           "name": "2011",
           "value":  Math.random() * 100000000
         }
       ]
     }
   ];
   
   } */
   
}
