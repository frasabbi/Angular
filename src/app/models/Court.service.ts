import { Injectable } from '@angular/core';
import { TennisCourt } from './tenniscourt';

@Injectable({
    providedIn: 'root'
  })
  export class CourtService 
  {

   public getCourts(): TennisCourt[] 
    {
      const courts = [new TennisCourt(1,'Soccer','Grass',"Sabbi's field",'5vs5'),  
      new TennisCourt(2,'Tennis','Tarmac',"Cristian's field",'Outdoor'),
      new TennisCourt(3,'Padel','Grass',"Andre's field",'Indoor'),
      new TennisCourt(4,'Soccer','Concrete',"Ste's Field",'7vs7'),
      new TennisCourt(5,'Tennis','Grass',"Nico's field",'Indoor')
      ];
      return courts;
    }
}