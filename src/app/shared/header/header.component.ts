import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private playerService: PlayerService) { }

  diceResult: number | null = null;

  setPlayers(count: number) {
    this.playerService.setPlayers(count);
  }

  resetScores() {
    this.playerService.resetScores();
  }

  rollDice() {
    this.diceResult = Math.floor(Math.random() * 6) + 1;
  }

  closeDiceModal() {
    this.diceResult = null;
  }

}
