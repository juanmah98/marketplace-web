import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{



  constructor() { }

  message:boolean = true;

  receiveMessage($event: boolean) {
    this.message = $event
  }

  ngOnInit(): void {
  }

}
