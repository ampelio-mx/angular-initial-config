import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-information-component',
  templateUrl: './work-information-component.component.html',
  styleUrl: './work-information-component.component.scss'
})
export class WorkInformationComponentComponent {

  constructor(private router: Router,){
      
    }
  
    goToWorkInformation(){
      this.router.navigate(['/','user-module','login'])
    }
  

}
