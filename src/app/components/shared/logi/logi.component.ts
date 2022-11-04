import { Component, EventEmitter, Output} from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-logi',
  templateUrl: './logi.component.html',
  styleUrls: ['./logi.component.css']
})
export class LogiComponent{

  message: boolean = true;
  login:string="0";

  @Output() messageEvent = new EventEmitter<boolean>();

  constructor() { }

  sendMessage() {
    this.messageEvent.emit(this.message)
  }  
  ngOnInit(): void {

    
   
      google.accounts.id.initialize({
        /* LOCAL */
         client_id: '1064213116404-kqprdnr0l66nmaf5lapc171otrukc1f2.apps.googleusercontent.com', 
        /*  */
        /* client_id: '1064213116404-t6okm41beb23vk6pihfa6lu1nc01in44.apps.googleusercontent.com',  */
        callback: this.handleCredentialResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
      );
      google.accounts.id.prompt(); // also display the One Tap dialog
    
  }

  handleCredentialResponse(response:any){
    console.log(response.credential);

    if(response.credential){
      sessionStorage.setItem("token", response.credential);
      this.login = "1";
      sessionStorage.setItem("login", this.login);
      document.location.href = "/"
    }
  }


  singin(){
    this.message = false;
    this.sendMessage();
  }



  


  
  

}
