import { Component } from '@angular/core';

@Component({
  selector: 'app-component-home',
  templateUrl: './component-home.component.html',
  styleUrl: './component-home.component.scss'
})
export class ComponentHomeComponent {

  showFirst = false;
  showSecond = false;
  showThird = false;

  ngOnInit(){

    setTimeout(()=>{
      this.showFirst = true;
    },750);

     setTimeout(()=>{
      this.showSecond = true;
    },1500);

     setTimeout(()=>{
      this.showThird = true;
    },2250);
  }

}
