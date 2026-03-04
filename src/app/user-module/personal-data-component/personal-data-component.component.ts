import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-data-component',
  templateUrl: './personal-data-component.component.html',
  styleUrl: './personal-data-component.component.scss'
})
export class PersonalDataComponentComponent {

  constructor(private router: Router,){
    
  }

  goToWorkInformation(){
    this.router.navigate(['/','user-module','formulario-informacion-laboral'])
  }

}
