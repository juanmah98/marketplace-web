import { Component, OnInit, ViewChild } from '@angular/core';
import { Datos } from 'src/app/interfaces/graphicTwo';
import { Historical } from 'src/app/interfaces/historical';
import { ApraService } from 'src/app/services/apra.service';
import { GraphicService } from 'src/app/services/graphic.service';
import { __values } from 'tslib';
import { ZingchartAngularComponent } from 'zingchart-angular';
import { AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-graphic-two',
  templateUrl: './graphic-two.component.html',
  styleUrls: ['./graphic-two.component.css']
})
export class GraphicTwoComponent implements OnInit {

  change:boolean = false;
  loading:boolean = false;
  names:string[] = [];
  switch:boolean=false;
  historical?: Historical;
  @ViewChild('myChart', { static: false }) chart?: ZingchartAngularComponent;
  
 nuevoDatos: Datos = {
    values: [],
    text: '',
    scales: 'scale-x, scale-y'
  };

  arregloAyuda: any[] = [];

  nuevoDatos3: Datos = {
    values: [],
    text: '',
    scales: 'scale-x, scale-y'
  };

  nuevoDatos4: Datos = {
    values: [],
    text: '',
    scales: 'scale-x, scale-y'
  };

  arregloDatos: Datos[] = [{
    values: [],
    text: '',
    scales: 'scale-x, scale-y'
  }];
  
  
  arre:any[] = [];
  arre2:any[] = [];
  arre3:any[] = [];


  constructor(private graphicServices: GraphicService, private _HistoricalService : ApraService) {}

  async ngOnInit(): Promise<void> {



   await this.getHistoricalAll()
   
    /* setTimeout(() => { */
     
     

     
     /*   this.arregloGrafico[0].values=[this.arre,this.arre2];  */
      console.log("this.arregloGrafico")
      console.log(this.arregloGrafico)
     /*  },1000) */

       this.multi.forEach( b => {
       this.names[this.names.length] = b.text      
       
      })
      console.log(this.names)
  }
  
  getHistoricalAll(){
    this.arregloGrafico.splice(0, this.arregloGrafico.length);
    this.arregloDatos.splice(0, this.arregloDatos.length);
    this._HistoricalService.getHistorical().subscribe({
      /*Obtenemos los datos mediante el servicio*/
      next: (data: Historical) => {
        console.log("Response");
        console.log(data);
        this.historical=data;
        
        
        
        /*RECORREMOS TODOS EL OBJETO PARA APLICAR FILTRADO*/
        console.log("foreach")
        this.historical.__values__.forEach(element => {
          let i = 0
       
          this.arregloAyuda = [];

          element.__data__.forEach(element2 => {
           /*METODO PARA TRANSFORMAR LA FECHA DE CADA ELEMENTO*/
            const fechaString = element2.acceptances //periodo
            const fecha = new Date(fechaString);
            const anio = fecha.getFullYear();
            const mes = fecha.getMonth() + 1;
            

            const fechaCompleta = `${mes}/${anio}`;

             /*GUARDAMOS EN UN ARREGLO NEUVO LOS DATOS CON EL FORMATO
             PARA MOSTRAR LOS DATOS EN EL CHART (grafico) FECHA, VALOR*/
            this.arregloAyuda[i++]=[fechaCompleta,element2.cash_and_liquid_assets]
            /* console.log("este es i" + i) */
            
          }); 
           /*METODO PARA ORDENAR CADA ELEMENTO DE MENOR A MAYOR POR FECHAS*/
          const uniqueArreglo:any = [];
          const variableSet = new Set();

          this.arregloAyuda.forEach(item => {
            const variable = item[0];
            if (!variableSet.has(variable)) {
              uniqueArreglo.push(item);
              variableSet.add(variable);
            }
          });
          
          uniqueArreglo.sort((a:any, b:any) => {
            const dateA = this.parseDate(a[0]);
            const dateB = this.parseDate(b[0]);
            return dateA.getTime() - dateB.getTime();
});
        /*GUARDAMOS TODO LOS VALORES EN UN ARREGLO NUEVO, QUE SERA CON EL QUE LUEGO PASAREMOS AL ARREGLO DEL GRAFICO*/
          this.arregloDatos.push({
            values:uniqueArreglo,
            text:"element.__data__[0].institution_name", //institute name
            scales: 'scale-x, scale-y'
          });  
       
        });

        console.log("this.arre DATOS5")
        console.log(this.arregloDatos)
       
        /* CON UN FOREACH SE PUEDEN GUARDAR TODOS LOS ELEMENTOS EN EL ARREGLO DEL GRAFICO */
      
           /*  this.arregloDatos.forEach(element2 => {
           
              this.arregloGrafico.push(element2);
             
            }); 
             */

            /* GUARDAMOS ALGUNSO ELEMENTOS UNICAMENTE */

            this.arregloGrafico.push(this.arregloDatos[1]);
            this.arregloGrafico.push(this.arregloDatos[2]);
            this.arregloGrafico.push(this.arregloDatos[3]);
            this.arregloGrafico.push(this.arregloDatos[4]);
            this.arregloGrafico.push(this.arregloDatos[5]);
            this.arregloGrafico.push(this.arregloDatos[6]);
            this.arregloGrafico.push(this.arregloDatos[8]);
         
            this.loading = true
        },
      error: (err:any) => {
        console.log('Error de peticion');
        console.log(err);
      },
      complete: () => {
        console.log('La peticion termino')
      }
      
    })
  }

  parseDate(dateString:any) {
    const [month, year] = dateString.split('/');
    const lastDayOfMonth = new Date(parseInt(year), parseInt(month), 0).getDate();
    return new Date(parseInt(year), parseInt(month) - 1, lastDayOfMonth);
  }
  arregloGrafico:any = []
  
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
    
    series: this.arregloGrafico,
    
  };
  
 

cambio(){
  this.axis2 = false;
  this.multi
}

cambio2(){
  this.axis2 = true;
  this.multi
}

  get multi(){
    
    let a:any[] = [] ;
      switch(this.switch) { 
        case false: {          
          a =  this.graphicServices.datosData2;
           break; 
        } 
         case true: { 
          a =  this.graphicServices.datosData;
           break; 
        }        
        default: { 
          break; 
        } 
     } 
    
      
     
    if(this.axis2!=false){
     
      
      a.forEach( b => {
        b.scales = 'scale-x, scale-y';
       
      })
      
      this.yaxis2 = "";
      return a
    }
    else{
     
      a.forEach( b => {
        b.scales = 'scale-x, scale-y-2';
      })      
      this.yaxis2 = "0:100:10";
      return this.graphicServices.datosData;
    }
   }

   reload(){
    window.location.reload();
   }


   chart1(n:number){
    this.arregloGrafico.splice(0, this.arregloGrafico.length);
    let i=0
      this.arregloDatos.forEach(element2 => {

        switch (n) {
          case 1:
            if(i<10){
             
              this.arregloGrafico.push(element2);
            }
            break;
          case 2:
            if(i>10 && i<=20){
             
              this.arregloGrafico.push(element2);
            }
            break;
         
          default:
            console.log('Selecciona una opción');
            break;
        }

        i++;
             
    }); 
             
    this.reloadChart();
    console.log(this.arregloGrafico)
    console.log("reset")
   }

 
  
  renderChart: boolean = true;

  reloadChart() {
    this.renderChart = false;
    setTimeout(() => {
      this.renderChart = true;
    }, 0);
  }
/*    get multi(){
      return this.graphicServices.datosData
   } */
   
}
