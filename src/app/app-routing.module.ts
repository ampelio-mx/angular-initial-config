import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home', loadChildren:()=>import('./home-module/home-module.module').then(m=>m.HomeModuleModule)},
  {path:'user-module', loadChildren:()=>import('./user-module/user-module.module').then(m=>m.UserModuleModule)},
  {path:'**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
