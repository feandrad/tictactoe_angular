import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: 'board.component.html',
  styleUrls: ['board.component.css']
})
export class BoardComponent implements OnInit {
  squares: any[];
  isXTurn: boolean;
  winner: string;

  constructor() {
  }

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.isXTurn = true;
  }

  get currentPlayer() {
    return this.isXTurn ? 'X' : 'O';
  }

  makeMove(clickedId: number) {
    if (!this.squares[clickedId]) {
      this.squares.splice(clickedId, 1, this.currentPlayer);
      this.isXTurn = !this.isXTurn;
    }

    this.winner = this.checkWinCondition();

  }

  checkWinCondition() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const [a, b, c] of lines) {
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }

    return null;
  }
}
