import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertybase } from 'src/app/model/IPropertybase';
import { IProperty } from 'src/app/model/iproperty';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form')
  addPropertyForm: NgForm | undefined;
  @ViewChild('formTabs') staticTabs?: TabsetComponent;
  SellRent = '1'

  propertyTypes: Array<string> = ['House','Apartment','Duplex']
  furnishTypes: Array<string> = ['Fully','Semi','Unfurnished']

  propertView: IPropertybase = {
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
  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  onBack()
  {
    this.router.navigate(['/'])
  }
  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }
  onSubmit(Form:NgForm)
  {
  console.log('congrats!! form submitted');
  console.log(this.addPropertyForm);
  }
}
