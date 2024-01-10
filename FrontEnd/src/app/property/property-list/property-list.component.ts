
import { Component,OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';

import { ActivatedRoute } from '@angular/router';
import { IPropertybase } from 'src/app/model/IPropertybase';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  SellRent = 1;
  properties: Array<IPropertybase> = [];
  constructor(private route:ActivatedRoute,private housingservice:HousingService){

  }
  ngOnInit():void{
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2;
    }
    this.housingservice.getAllProperties(this.SellRent).subscribe(
        (data)=>{
        this.properties=data
        console.log(data);
      },error =>{
        console.log(error)
      }
    )
  }

}
