import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Witelist } from 'src/app/interfaces/witelst';
import { WitelistService } from 'src/app/services/witelist.service';

@Component({
  selector: 'app-form-witelist',
  templateUrl: './form-witelist.component.html',
  styleUrls: ['./form-witelist.component.css']
})
export class FormWitelistComponent implements OnInit {
  registerForm: FormGroup;
  waitlist: Witelist[] = [];
  constructor(private formBuilder: FormBuilder, private wlServices: WitelistService) {

    this.registerForm = this.formBuilder.group(
      { 
        id:[],
        business_email: [""],
        company_name: [""],
        country: [""],
        firstname: [""],
        job_title: [""],
        lastname: [""],
        phone: [],
          
      },
    )

   }

 async ngOnInit(): Promise<void> {
   await this.getWaitlist();
  }

  getWaitlist(){
    this.wlServices.getWaitlist().subscribe({
      next: (data: any) => {
        console.log("Response");
        console.log(data);
        this.waitlist=data;
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

  async onSumbit(){

    const response:Witelist = ({
        id: this.registerForm.value.id,
        business_email: this.registerForm.value.business_email,
        company_name: this.registerForm.value.company_name,
        country: this.registerForm.value.country,
        firstname: this.registerForm.value.firstname,
        job_title: this.registerForm.value.job_title,
        lastname: this.registerForm.value.lastname,
        phone: this.registerForm.value.phone,


    })
    
   /*  await this.wlServices.postNewPerson(response);  */

    this.wlServices.postNewPerson(response).subscribe(
      response => {
        console.log('Respuesta del servidor:', response);
        // Realiza acciones adicionales aquí si es necesario
      },
      error => {
        console.error('Error al realizar la solicitud POST:', error);
        // Maneja el error aquí si es necesario
      }
      );
    this.onReset();    
  }

  onReset(){
    this.registerForm.reset();
  }

}
