import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-logi',
  templateUrl: './logi.component.html',
  styleUrls: ['./logi.component.css']
})
export class LogiComponent{

  message: boolean = true;

  @Output() messageEvent = new EventEmitter<boolean>();

  constructor() { }

  sendMessage() {
    this.messageEvent.emit(this.message)
  }  
  ngOnInit(): void {
  }


  singin(){
    this.message = false;
    this.sendMessage();
  }



  


  
  

}
