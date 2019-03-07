import { Component, OnChanges, Input, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-max-players',
  templateUrl: './max-players.component.html',
  styleUrls: ['./max-players.component.css']
})
export class MaxPlayersComponent implements OnChanges {

  @Input("maxP") maxPlayer = 0;
  @Input("sportKind") sportType = "";
  iconWidth = 75;
  playerString = "";
  @Output("numPlayerClicked") maxPlayerClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    const icon = this.sportType.toLowerCase() === "soccer" ? "⚽" : "🎾";

    for (let i = 0; i < this.maxPlayer; i++) {

      this.playerString += icon;

    }
  }


  onClick(): void {

    this.maxPlayerClicked.emit(`Max Player = ${this.maxPlayer}`);

  }

}
