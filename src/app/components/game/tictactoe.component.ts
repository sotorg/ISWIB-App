// tictactoe.component.ts
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Defining players and image paths
<<<<<<< HEAD
<<<<<<< HEAD
const PLAYER_SWIBI = 'swibi';
=======
const PLAYER_SWIBI = 'SWIBI';
>>>>>>> 94663fc (Initial commit)
=======
const PLAYER_SWIBI = 'SWIBI';
>>>>>>> 03bbe79 (tami - modifikacije)
const PLAYER_ISWIB = 'ISWiB';
const IMAGE_SWIBI_PATH = './assets/images/swibi.png';
const IMAGE_ISWIB_PATH = './assets/images/iswib.png';

type PlayerType = typeof PLAYER_SWIBI | typeof PLAYER_ISWIB;
type SquareContentType = PlayerType | null;
type WinnerType = PlayerType | 'Draw' | null;

// Interface for emoji (used for both draw and win)
interface GameEmoji {
  id: number;
  emoji: string;
  top: string;
  left: string;
  animationDelay: string;
  fontSize: string;
}

const possibleDrawEmojis = ['😅', '🤔', '😲', '😒', '😐', '😬', '🤷‍♀️', '🤦‍♂️', '🤝'];
const possibleWinEmojis = ['🏆', '🎉', '🥇', '🙌', '🥳', '🌟', '✨', '🤩', '👍'];

@Component({
  selector: 'app-tictactoe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.scss']
})
export class TictactoeComponent implements OnInit, AfterViewInit {
  @ViewChild('gameBoard') gameBoard!: ElementRef; // Reference to the .board div

  squares!: SquareContentType[];
  xIsNext!: boolean;
  winner!: WinnerType;
  status!: string;
  winningLine: number[] | null = null; // Stores the winning line
  triggerBoardAnimation: boolean = false; // Board animation control

  // Variables for controlling emoji animations
  winEmojis: GameEmoji[] = []; // Array of emojis for win
  drawEmojis: GameEmoji[] = []; // Array of emojis for draw

  readonly playerSwibi = PLAYER_SWIBI;
  readonly playerIswib = PLAYER_ISWIB;
  readonly imageSwibi = IMAGE_SWIBI_PATH;
  readonly imageIswib = IMAGE_ISWIB_PATH;

  private boardWidth: number = 0;
  private boardHeight: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  ngAfterViewInit(): void {
    // Get board dimensions after the View is initialized
    if (this.gameBoard) {
      this.boardWidth = this.gameBoard.nativeElement.offsetWidth;
      this.boardHeight = this.gameBoard.nativeElement.offsetHeight;
    }
  }

  // Function to start a new game
  newGame(): void {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = null;
    this.winningLine = null; // Reset winning line
    this.updateStatus();

    // Reset animation states
    this.winEmojis = []; // Clear win emojis array
    this.drawEmojis = []; // Clear draw emojis array

    // Briefly activate board animation
    this.triggerBoardAnimation = true;
    setTimeout(() => {
      this.triggerBoardAnimation = false;
    }, 200); // Animation duration (must match CSS animation)
  }

  // Get current player
  get currentPlayer(): PlayerType {
    return this.xIsNext ? this.playerSwibi : this.playerIswib;
  }

  // Function to make a move
  makeMove(idx: number): void {
    // Prevent moves if square is already occupied or game is over
    if (this.squares[idx] || this.winner) {
      return;
    }

    this.squares[idx] = this.currentPlayer;
    this.xIsNext = !this.xIsNext;
    this.winner = this.calculateWinner();
    this.updateStatus();

    // DODAJTE OVU LINIJU KODA
    // Uklanja fokus sa kliknutog dugmeta kako bi se sprečio skok fokusa na sledeći element
    (document.activeElement as HTMLElement)?.blur();
  }

  // Calculate winner
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
        this.winningLine = line; // Store winning line
        return this.squares[a];
      }
    }

    // Check for draw (if all squares are filled and no winner)
    if (this.squares.every(square => square !== null)) {
      return 'Draw';
    }

    this.winningLine = null; // Reset if no winner yet
    return null;
  }

  // Update status message and trigger animations
  updateStatus(): void {
    if (this.winner) {
      this.status = this.winner === 'Draw' ? 'Game is a draw!' : `${this.winner} won!`;

      // Trigger animations based on result
      if (this.winner !== 'Draw') {
        this.generateWinEmojis(); // Generate win emojis
        setTimeout(() => {
          this.winEmojis = []; // Hide emojis after some time
        }, 3000); // Emoji animation duration
      } else {
        this.generateDrawEmojis(); // Generate draw emojis
        setTimeout(() => {
          this.drawEmojis = []; // Hide emojis after some time
        }, 3000); // Emoji animation duration
      }

    } else {
      this.status = `Next player: ${this.currentPlayer}`;
    }
  }

  // Function to generate win emojis
  private generateWinEmojis(): void {
    this.winEmojis = [];
    const numEmojis = Math.floor(Math.random() * 6) + 5; // Between 5 and 10 emojis

    for (let i = 0; i < numEmojis; i++) {
      const randomEmoji = possibleWinEmojis[Math.floor(Math.random() * possibleWinEmojis.length)];
      // Generate positions so emojis can go outside the board
      // Range from -25% to 125% of board height/width
      const randomTop = Math.floor(Math.random() * this.boardHeight * 1.5) - this.boardHeight * 0.25;
      const randomLeft = Math.floor(Math.random() * this.boardWidth * 1.5) - this.boardWidth * 0.25;
      const randomDelay = (Math.random() * 0.7).toFixed(2); // Slightly longer delay
      const randomFontSize = `${Math.floor(Math.random() * 4) + 3}em`; // From 3em to 6em (larger range)

      this.winEmojis.push({
        id: i,
        emoji: randomEmoji,
        top: `${randomTop}px`,
        left: `${randomLeft}px`,
        animationDelay: `${randomDelay}s`,
        fontSize: randomFontSize
      });
    }
  }

  // Function to generate draw emojis
  private generateDrawEmojis(): void {
    this.drawEmojis = [];
    const numEmojis = Math.floor(Math.random() * 6) + 5; // Between 5 and 10 emojis

    for (let i = 0; i < numEmojis; i++) {
      const randomEmoji = possibleDrawEmojis[Math.floor(Math.random() * possibleDrawEmojis.length)];
      const randomTop = Math.floor(Math.random() * this.boardHeight * 1.5) - this.boardHeight * 0.25;
      const randomLeft = Math.floor(Math.random() * this.boardWidth * 1.5) - this.boardWidth * 0.25;
      const randomDelay = (Math.random() * 0.7).toFixed(2);
      const randomFontSize = `${Math.floor(Math.random() * 4) + 3}em`; // From 3em to 6em

      this.drawEmojis.push({
        id: i,
        emoji: randomEmoji,
        top: `${randomTop}px`,
        left: `${randomLeft}px`,
        animationDelay: `${randomDelay}s`,
        fontSize: randomFontSize
      });
    }
  }

  // Get image path for player
  getImageForPlayer(player: SquareContentType): string | null {
    if (player === this.playerSwibi) {
      return this.imageSwibi;
    }
    if (player === this.playerIswib) {
      return this.imageIswib;
    }
    return null;
  }

  // Check if square is part of the winning line
  isWinningSquare(idx: number): boolean {
    return this.winningLine ? this.winningLine.includes(idx) : false;
  }
}