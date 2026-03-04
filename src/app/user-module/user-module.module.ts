import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { LoginComponentComponent } from './login-component/login-component.component';
import { PersonalDataComponentComponent } from './personal-data-component/personal-data-component.component';
import { WorkInformationComponentComponent } from './work-information-component/work-information-component.component';


@NgModule({
  declarations: [
    LoginComponentComponent,
    PersonalDataComponentComponent,
    WorkInformationComponentComponent
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule
  ]
})
export class UserModuleModule { }
