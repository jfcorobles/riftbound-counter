import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private playerService: PlayerService) { }

  showResetModal = false;
  diceResult: number | null = null; deferredPrompt: any;

  ngOnInit() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;

      const installBtn = document.getElementById('install-btn');
      if (installBtn) {
        installBtn.style.display = 'block';
        installBtn.addEventListener('click', () => {
          this.deferredPrompt.prompt();
          this.deferredPrompt.userChoice.then(() => {
            this.deferredPrompt = null;
          });
        });
      }
    });
  }

  setPlayers(count: number) {
    this.playerService.setPlayers(count);
  }

  resetScores() {
    this.playerService.resetScores();
    this.closeResetModal();
  }


  resetPlayers() {
    this.playerService.resetPlayers();
    this.closeResetModal();
  }

  rollDice() {
    this.diceResult = Math.floor(Math.random() * 6) + 1;
  }

  closeDiceModal() {
    this.diceResult = null;
  }

  openResetModal() {
    this.showResetModal = true;
  }

  closeResetModal() {
    this.showResetModal = false;
  }

}
