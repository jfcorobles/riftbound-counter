import { effect, Injectable, signal } from '@angular/core';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private STORAGE_KEY = "PlaySession";

  constructor() {
    const cached = localStorage.getItem(this.STORAGE_KEY);
    if (cached) {
      try {
        const parsed = JSON.parse(cached) as Player[];
        this.players.set(parsed);
        this.idCounter = parsed.length ? Math.max(...parsed.map(p => p.id)) + 1 : 1;
      } catch (e) {
        console.error('Error al cargar jugadores desde localStorage', e);
      }
    }

    effect(() => {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.players()));
    });
  }

  private idCounter = 1;

  players = signal<Player[]>([
    { id: 0, name: 'Player 1', score: 0 }
  ]);

  selectedPlayer = signal<Player | null>(null);

  setPlayers(count: number) {
    this.idCounter = 0;
    const newPlayers: Player[] = [];

    for (let i = 0; i < count; i++) {
      newPlayers.push({
        id: this.idCounter++,
        name: `Player ${i + 1}`,
        score: 0
      });
    }

    this.players.set(newPlayers);
  }

  updateScore(id: number, delta: number) {
    this.players.update(players =>
      players.map(player =>
        player.id === id ? { ...player, score: player.score + delta } : player
      )
    );
  }

  updatePlayerName(id: number, newName: string) {
    this.players.update(players =>
      players.map(player =>
        player.id === id ? { ...player, name: newName } : player
      )
    );
  }

  removePlayer(id: number) {
    const currentPlayers = this.players();
    const updatedPlayers = currentPlayers.filter(p => p.id !== id);
    this.players.set(updatedPlayers);
  }

  resetScores() {
    this.players.update(players =>
      players.map(player => ({ ...player, score: 0 }))
    );
  }

  resetPlayers() {
  this.players.update(players => 
    players.map((player, index) => ({
      ...player,
      score: 0,
      name: `Player ${index + 1}`
    }))
  );
}
}
