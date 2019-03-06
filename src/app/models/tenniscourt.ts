export class TennisCourt
{
  backgroundcolor='red';
  constructor(private _id:number,private _sport:string,private _surface:string,private _field:string){}
    
    get Sport() : string {
      return this._sport;
    }

    get Id() : number {
      return this._id;
    }
    
    set Sport(v : string) {
      this._sport= v;
    }
    set Id(v : number) {
      this._id= v;
    }
    get Surface() : string {
      return this._surface;
    }

    set Surface(v : string) {
      this._surface = v;
    }
  
    get Field() : string {
      return this._field;
    }
    
    set Field(v : string) {
      this._field = v;
    }
    
}