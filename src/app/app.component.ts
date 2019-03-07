import { Component } from '@angular/core';
import {TennisCourt} from './models/tenniscourt'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloAngular';
  backgroundcolor='red';
  courts= [new TennisCourt(1,'Soccer','Grass',"Sabbi's field",'5vs5','5x10'),
  new TennisCourt(2,'Soccer','Concrete',"Ste's Field",'7vs7','10x15'),
  new TennisCourt(3,'Tennis','Tarmac',"Cristian's field",'Outdoor','4x6'),
  new TennisCourt(4,'Padel','Grass',"Andre's field",'Indoor','3x4'),
  new TennisCourt(5,'Tennis','Grass',"Nico's field",'Indoor','2x3')
];
court=this.courts[0];

public onMaxPlayerClicked(string:string):void{
  alert(string);
}
}


