import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProperyCardComponent } from './property/propery-card/propery-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import {} from '@angular/common/'
import { AddPropertyComponent } from './property/add-property/add-property.component';
import {Routes,RouterModule} from '@angular/router'
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component'; 
// const appRoutes:Routes = [
//   {path:'', component:PropertyListComponent},
//   {path:'rent-property', component:PropertyListComponent},
//   {path:'add-property', component:AddPropertyComponent},
//   {path:'property-detail/:id', component:PropertyDetailComponent}
// ]
@NgModule({
  declarations: [	
    AppComponent,
    ProperyCardComponent,
    PropertyListComponent,
      NavBarComponent,
      AddPropertyComponent,
      PropertyDetailComponent,
      UserLoginComponent,
      UserRegisterComponent
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
