import { Component, Input } from '@angular/core';
import { IPropertybase } from 'src/app/model/IPropertybase';


@Component({
  selector: 'app-propery-card',
  templateUrl: './propery-card.component.html',
  styleUrls: ['./propery-card.component.css']
})
export class ProperyCardComponent {
  @Input()
  
  property: IPropertybase = {
    ID: '',
    Name: '',
    PType: '',
    Price: 0,
    SellRent: 0,
    FType: '',
    BHK: 0,
    BuiltArea: 0,
    City: '',
    RTM: 0
  };
  
  @Input()
  hideIcons: boolean | undefined;
  
}
