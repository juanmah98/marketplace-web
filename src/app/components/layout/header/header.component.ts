import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public objetounico:any = {};
  state1:boolean = true;
  state2:boolean  = false;
  state3:boolean  = false;
  sesion: boolean = false;
  name:string = "";
  constructor() { }

  ngOnInit(): void {
    let token = sessionStorage.getItem("token") as string;
    let login = sessionStorage.getItem("login") as string;
    this.objetounico = this.decodificarJwt(token);
    if(login == "1"){
      this.sesion = true;
    }
  }

  private decodificarJwt(token:string){
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c){
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  logout(){
    this.sesion = false;
    this.objetounico = {}
  }

  setState1(){
    this.state1 = true;
    this.state2 = false;
    this.state3 = false; 
  }

  setState2(){
    /* this.state1 = false;
    this.state2 = true;
    this.state3 = false; */
  }

  setState3(){
    /* this.state1 = false;
    this.state2 = false;
    this.state3 = true; */
  }

}
