import { Component } from '@angular/core';

@Component({
  selector: 'app-propery-card',
  templateUrl: './propery-card.component.html',
  styleUrls: ['./propery-card.component.css']
})
export class ProperyCardComponent {
  property : any ={
    "Id":1,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
  }

}
