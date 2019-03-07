import { Component } from '@angular/core';
import {TennisCourt} from './models/tenniscourt'
import {CourtService} from './models/Court.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloAngular';
  backgroundcolor='red';

  constructor(private courtService: CourtService) {}
  courts= this.courtService.getCourts();
  court=this.courts[0];
 

  public onMaxPlayerClicked(string:string):void{
    alert(string);
  }
}


