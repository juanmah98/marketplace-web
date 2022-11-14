import { Injectable } from '@angular/core';

interface Countrie {
  name:   string;
  series: Series[];
}

export interface Series {
  name:  string;
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

  private data: Countrie[] = [
 
    {
      
      "name": "Germany",
      "series": [
        {
          "name": "1990",
          "value": 62000000,
        },
        {
          "name": "2010",
          "value": 73000000
        },
        {
          "name": "2011",
          "value": 139400000
        }
      ]
    },
  
    {
      "name": "USA",
      "series": [
        {
          "name": "1990",
          "value": 250000000
        },
        {
          "name": "2010",
          "value": 309000000
        },
        {
          "name": "2011",
          "value": 211000000
        }
      ]
    },
  
    {
      "name": "France",
      "series": [
        {
          "name": "1990",
          "value": 58000000
        },
        {
          "name": "2010",
          "value": 50000020
        },
        {
          "name": "2011",
          "value": 198000000
        }
      ]
    },
    {
      "name": "Argentina",
      "series": [
        {
          "name": "1990",
          "value": 57000000
        },
        {
          "name": "2010",
          "value": 62000000
        },

        {
          "name": "2011",
          "value": 82000000
        }
      ]
    }
  ];
  

  randomData(){
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
   
   }
   
}
