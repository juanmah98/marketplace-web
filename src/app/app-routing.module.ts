import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswersComponent } from './components/routs/answers/answers.component';
import { ComingSoonComponent } from './components/routs/coming-soon/coming-soon.component';
import { GraphicTwoComponent } from './components/routs/graphic-two/graphic-two.component';
import { GraphicComponent } from './components/routs/graphic/graphic.component';
import { HomeComponent } from './components/routs/home/home.component';
import { LoginComponent } from './components/routs/login/login.component';
import { TeamComponent } from './components/routs/team/team.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'answers', component: AnswersComponent},   
  {path: 'graphic/:id', component: GraphicComponent},  
  {path: 'coming', component: ComingSoonComponent},
  {path: 'team', component: TeamComponent},
  {path: 'graphic2', component: GraphicTwoComponent},  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
