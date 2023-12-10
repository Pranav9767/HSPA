import { Component, Input } from '@angular/core';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-propery-card',
  templateUrl: './propery-card.component.html',
  styleUrls: ['./propery-card.component.css']
})
export class ProperyCardComponent {
  @Input()
  property!: IProperty; 
}
