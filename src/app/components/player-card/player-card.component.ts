import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-player-card',
  imports: [],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.css'
})
export class PlayerCardComponent {
  @Input() player!: Player;
  @Output() scoreChange = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

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
