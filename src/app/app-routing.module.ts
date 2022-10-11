import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/routs/home/home.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  /* {path: 'card', component: CardComponent}, */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
