import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IProperty } from '../IProperty.interface';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

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

  propertView: IProperty = {
    ID: '',
    Name: '',
    Type: '',
    Price: 0,
    SellRent: 0
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
