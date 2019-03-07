export class TennisCourt
{
  constructor(private _id:number,private _sport:string,private _surface:string,private _field:string,private _info:string,private _length:string){}
    
    get Sport() : string {
      return this._sport;
    }
    get Length() : string {
      return this._length;
    }
    get Id() : number {
      return this._id;
    }
    set Length(v : string){
      this._length= v;
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
    
    get Info() : string{
      return this._info;
    }
    
    set Info(v : string){
      this._info = v;
    }
    
onClickMe(): void{

  alert(this.Field);
  
      }
public maxPlayer(): number{
  if(this._sport==="Padel"){
    return 4
  }else if(this._sport==="Tennis"){
    return 2
  }else if(this._info==="7vs7"){
    return 14
  }
  return 10
}
}