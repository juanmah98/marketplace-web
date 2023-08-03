import { Injectable } from '@angular/core';
import { Graphic } from '../interfaces/Graphics';
import { Datos } from '../interfaces/graphicTwo';

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
      text: 'Bank of Queensland Limited',
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
      text: 'Bank of Sydney Ltd',
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
      text: 'Bank of Taiwan',
      scales: 'scale-x, scale-y',
    },
     {
      values: [
  [ "2002", 5 ],
  [ "2003", 10 ],
  [ "2004", 15 ],
  [ "2005", 20 ],
  ["2006", 0 ],
  [ "2007", 15 ],
  [ "2008", 5 ]
      ],
      text: 'Bendigo and Adelaide Bank Limited',
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
}
