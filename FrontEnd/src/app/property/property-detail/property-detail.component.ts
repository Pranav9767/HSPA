import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyID: number = 0;
  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.propertyID  = Number(params['id']);
      console.log('Selected property id is:', this.propertyID);
    }); // This will log the value of the 'id' parameter
}

onSelectNext()
{
  this.propertyID+=1;
  this.router.navigate(['property-detail',this.propertyID])
}
}


