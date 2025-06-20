import { Component, Input } from '@angular/core';
import { Player } from '../../models/player.model';
import { PlayerCardComponent } from "../player-card/player-card.component";

@Component({
  selector: 'app-player-layout',
  imports: [PlayerCardComponent],
  templateUrl: './player-layout.component.html',
  styleUrl: './player-layout.component.css'
})
export class PlayerLayoutComponent {
  @Input() players: Player[] = [];
  @Input() onScoreChange!: (id: number, delta: number) => void;
  @Input() onRemove!: (id: number) => void;
}
