import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  state1:boolean = true;
  state2:boolean  = false;
  state3:boolean  = false;
  constructor() { }

  ngOnInit(): void {
  }

  setState1(){
    this.state1 = true;
    this.state2 = false;
    this.state3 = false;
  }

  setState2(){
    this.state1 = false;
    this.state2 = true;
    this.state3 = false;
  }

  setState3(){
    this.state1 = false;
    this.state2 = false;
    this.state3 = true;
  }

}
