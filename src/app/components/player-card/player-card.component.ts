import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from '../../models/player.model';
import { FormsModule } from '@angular/forms';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-card',
  imports: [FormsModule],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.css'
})
export class PlayerCardComponent {
  @Input() player!: Player;
  @Output() scoreChange = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();
  @Output() nameChange = new EventEmitter<{ id: number, newName: string }>();

  showNameModal = false;
  newName = '';

  constructor(public playerService: PlayerService){}

  increment() {
    this.scoreChange.emit(1);
  }

  decrement() {
    this.scoreChange.emit(-1);
  }

  removePlayer() {
    this.remove.emit(this.player.id);
  }
}
