import { Component,OnChanges, Input, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-max-players',
  templateUrl: './max-players.component.html',
  styleUrls: ['./max-players.component.css']
})
export class MaxPlayersComponent implements OnChanges {

  @Input() maxPlayer = 0;
  @Input() sportType = "";
  iconWidth = 75;
  playerString = "";
  @Output() maxPlayerClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void{
    for(let i = 0;i < this.maxPlayer;i++){
      this.playerString+="♿";
    }
  }
onClick(): void{
  this.maxPlayerClicked.emit('Max Player = ${this.maxPlayer}');
}

}
