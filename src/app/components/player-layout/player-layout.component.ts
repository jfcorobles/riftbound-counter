import { Component, Input } from '@angular/core';
import { Player } from '../../models/player.model';
import { PlayerCardComponent } from "../player-card/player-card.component";
import { PlayerService } from '../../services/player.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-player-layout',
  imports: [PlayerCardComponent, FormsModule],
  templateUrl: './player-layout.component.html',
  styleUrl: './player-layout.component.css'
})
export class PlayerLayoutComponent {
  @Input() players: Player[] = [];
  @Input() onScoreChange!: (id: number, delta: number) => void;
  @Input() onRemove!: (id: number) => void;
  @Input() onPlayerNameChange!: (event: { id: number; newName: string }) => void;

  constructor(public playerService: PlayerService) { }


  newName = '';

  saveName() {
    const player = this.playerService.selectedPlayer();
    if (player && this.newName.trim()) {
      this.onPlayerNameChange({ id: player.id, newName: this.newName });
      this.playerService.selectedPlayer.set(null);
      this.newName = '';
    }
  }


  cancelEdit() {
    this.playerService.selectedPlayer.set(null);
    this.newName = '';
  }

}
