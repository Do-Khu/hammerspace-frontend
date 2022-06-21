import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLoginComponent} from './app-login/app-login.component'
import { MainScreenComponent } from './main-screen/main-screen.component';


const routes: Routes = [
  {path:'', component:AppLoginComponent },
  {path:'main', component:MainScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
