import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TakmicarComponent } from './takmicar/takmicar.component';
import { ModeratorComponent } from './moderator/moderator.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"takmicar", component:TakmicarComponent},
  {path:"moderator", component:ModeratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
