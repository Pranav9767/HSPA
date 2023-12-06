import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {

  properties : Array<any> =[
    {
    "Id":1,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
    },
    {
      "Id":2,
      "Name":"Adani House",
      "Type":"House",
      "Price":123000
      },
      {
        "Id":3,
        "Name":"Ambani House",
        "Type":"House",
        "Price":144000
        },
        {
          "Id":4,
          "Name":"Tata House",
          "Type":"House",
          "Price":19000
          },
          {
            "Id":5,
            "Name":"Macro House",
            "Type":"House",
            "Price":11000
            },
            {
              "Id":6,
              "Name":"Pearl white House",
              "Type":"House",
              "Price":21000
              },
]
}
