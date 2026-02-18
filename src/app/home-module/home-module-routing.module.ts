import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentHomeComponent } from './component-home/component-home.component';

const routes: Routes = [
  {path:'component-home',component:ComponentHomeComponent},
  {path:'**', pathMatch:'full', redirectTo:'component-home'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModuleRoutingModule { }
