import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.css']
})
export class LearnMoreComponent implements OnInit {

  a1:boolean=true;
  a2:boolean=false;
  a3:boolean=false;
  a4:boolean=false;
  a5:boolean=false;
  a6:boolean=false;
  a7:boolean=false;

  constructor() { }

  ngOnInit(): void {

   
  }

  vista(aux:string){
    switch(aux) { 
      case "1": { 
        this.a1=true;
        this.a2=false;
        this.a3=false;
        this.a4=false;
        this.a5=false;
        this.a6=false;
        this.a7=false;
         break; 
      } 
      case "2": { 
        this.a1=false;
        this.a2=true;
        this.a3=false;
        this.a4=false;
        this.a5=false;
        this.a6=false;
        this.a7=false;
         break; 
      } 

      case "3": { 
        this.a1=false;
        this.a2=false;
        this.a3=true;
        this.a4=false;
        this.a5=false;
        this.a6=false;
        this.a7=false;
         break; 
      } 

      case "4": { 
        this.a1=false;
        this.a2=false;
        this.a3=false;
        this.a4=true;
        this.a5=false;
        this.a6=false;
        this.a7=false;
         break; 
      } 

      case "5": { 
        this.a1=false;
        this.a2=false;
        this.a3=false;
        this.a4=false;
        this.a5=true;
        this.a6=false;
        this.a7=false;
         break; 
      } 

      case "6": { 
        this.a1=false;
        this.a2=false;
        this.a3=false;
        this.a4=false;
        this.a5=false;
        this.a6=true;
        this.a7=false;
         break; 
      } 

      case "7": { 
        this.a1=false;
        this.a2=false;
        this.a3=false;
        this.a4=false;
        this.a5=false;
        this.a6=false;
        this.a7=true;
         break; 
      } 
      default: { 
         //statements; 
         break; 
      } 
   } 
  }

  

}
