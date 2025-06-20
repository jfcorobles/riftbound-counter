import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { PlayerLayoutComponent } from "../../components/player-layout/player-layout.component";

@Component({
  selector: 'app-main',
  imports: [PlayerLayoutComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(public playerService: PlayerService) { }

  changeScore(id: number, delta: number) {
    this.playerService.updateScore(id, delta);
  }

  removePlayer(playerId: number) {
  this.playerService.removePlayer(playerId);
}
}
