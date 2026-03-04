import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { PersonalDataComponentComponent } from './personal-data-component/personal-data-component.component';
import { WorkInformationComponentComponent } from './work-information-component/work-information-component.component';

const routes: Routes = [
  {path:'login', component:LoginComponentComponent},
  {path:'formulario-informacion-personal', component:PersonalDataComponentComponent},  
  {path:'formulario-informacion-laboral', component:WorkInformationComponentComponent},
  {path:'**', pathMatch:'full', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
