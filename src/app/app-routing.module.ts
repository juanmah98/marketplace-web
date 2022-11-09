import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswersComponent } from './components/routs/answers/answers.component';
import { GraphicComponent } from './components/routs/graphic/graphic.component';
import { HomeComponent } from './components/routs/home/home.component';
import { LoginComponent } from './components/routs/login/login.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'answers', component: AnswersComponent},   
  {path: 'graphic', component: GraphicComponent
},  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
