import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Player and image definitions
const PLAYER_SWIBI = 'swibi';
const PLAYER_ISWIB = 'ISWiB';
const IMAGE_SWIBI_PATH = './assets/images/swibi.png';
const IMAGE_ISWIB_PATH = './assets/images/iswib.png';

type PlayerType = typeof PLAYER_SWIBI | typeof PLAYER_ISWIB;
type SquareContentType = PlayerType | null;
type WinnerType = PlayerType | 'Draw' | null;

@Component({
  selector: 'app-tictactoe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.scss']
})
export class TictactoeComponent implements OnInit {
  squares!: SquareContentType[];
  xIsNext!: boolean;
  winner!: WinnerType;
  status!: string;

  readonly playerSwibi = PLAYER_SWIBI;
  readonly playerIswib = PLAYER_ISWIB;
  readonly imageSwibi = IMAGE_SWIBI_PATH;
  readonly imageIswib = IMAGE_ISWIB_PATH;

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = null;
    this.updateStatus();
  }

  get currentPlayer(): PlayerType {
    return this.xIsNext ? this.playerSwibi : this.playerIswib;
  }

  makeMove(idx: number): void {
    if (this.squares[idx] || this.winner) {
      return;
    }

    this.squares[idx] = this.currentPlayer;
    this.xIsNext = !this.xIsNext;
    this.winner = this.calculateWinner();
    this.updateStatus();
  }

  calculateWinner(): WinnerType {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (this.squares[a] &&
          this.squares[a] === this.squares[b] &&
          this.squares[a] === this.squares[c]) {
        return this.squares[a];
      }
    }

    if (this.squares.every(square => square !== null)) {
      return 'Draw';
    }

    return null;
  }

  updateStatus(): void {
    if (this.winner) {
      this.status = this.winner === 'Draw' ? 'The game is a draw!' : `${this.winner} has won!`;
    } else {
      this.status = `Next player: ${this.currentPlayer}`;
    }
  }

  getImageForPlayer(player: SquareContentType): string | null {
    if (player === this.playerSwibi) {
      return this.imageSwibi;
    }
    if (player === this.playerIswib) {
      return this.imageIswib;
    }
    return null;
  }
}
