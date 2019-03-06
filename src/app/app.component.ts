import { Component } from '@angular/core';
import {TennisCourt} from './models/tenniscourt'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloAngular';
  courts= [new TennisCourt(1,'Soccer','Grass','Sabbi "s field'),
  new TennisCourt(2,'Soccer','Concrete','Ste"s Field'),
  new TennisCourt(3,'Tennis','Tarmac','Cristian"s field'),
  new TennisCourt(4,'Padel','Grass','Andre"s field'),
  new TennisCourt(5,'Tennis','Grass','Nico "s field')
];
  court=this.courts[0];
    
  }


