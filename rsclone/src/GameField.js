/* eslint-disable no-plusplus */
import { COLS, ROWS, BLOCK_SIZE } from './constants';
import GameGrid from './GameGrid';
import Tetromino from './tetrominoes';

export default class GameField {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');

    this.context.canvas.width = COLS * BLOCK_SIZE;
    this.context.canvas.height = ROWS * BLOCK_SIZE;
    this.context.scale(BLOCK_SIZE, BLOCK_SIZE);

    this.gameOver = false;

    this.gameGridLogic = new GameGrid();

    const playBttn = document.querySelector('.play_button');
    playBttn.addEventListener('click', () => {
      this.playGame();
      this.resetTime();
    });

    this.timer = document.getElementById('timer');
    this.hour = 0;
    this.min = 0;
    this.sec = 0;
    setInterval(() => { this.tick(); }, 1000);

    this.up = document.querySelector('.up');
    this.left = document.querySelector('.left');
    this.right = document.querySelector('.right');
    this.down = document.querySelector('.down');

    this.left.addEventListener('click', () => {
      this.changeCoordinates(-1, 0);
    });

    this.right.addEventListener('click', () => {
      this.changeCoordinates(1, 0);
    });

    this.down.addEventListener('click', () => {
      this.changeCoordinates(0, 1);
    });

    this.up.addEventListener('click', () => {
      this.tetromino.rotateTetromino();
      this.drawNewPosition();
    });

    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      if (e.which === 37) {
        this.changeCoordinates(-1, 0);
      }
      if (e.which === 38) {
        this.tetromino.rotateTetromino();
        this.drawNewPosition();
      }
      if (e.which === 39) {
        this.changeCoordinates(1, 0);
      }
      if (e.which === 40) {
        this.changeCoordinates(0, 1);
      }
    });
  } // end constructor

  playGame() {
    this.tetromino = new Tetromino(this.context);
    this.gameGridLogic.createGrid();
    this.tetromino.drawTetromino();
  }

  changeCoordinates(x, y) {
    let isValid = true;
    this.tetromino.shape.forEach((row, dy) => {
      row.forEach((value, dx) => {
        if (!this.isTetroInsideWalls(this.tetromino.x + dx + x, this.tetromino.y + dy + y)) {
          isValid = false;
        }
      });
    });
    if (isValid) {
      this.tetromino.x += x;
      this.tetromino.y += y;
    }

    this.drawNewPosition();
  }

  drawNewPosition() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    this.tetromino.drawTetromino();
  }

  isTetroInsideWalls(x, y) {
    return x >= 0 && x < COLS && y <= ROWS;
  }

  resetTime() {
    this.hour = 0;
    this.min = 0;
    this.sec = 0;
  }

  tick() {
    this.sec++;
    if (this.sec >= 60) {
      this.min++;
      this.sec -= 60;
    }
    if (this.min >= 60) {
      this.hour++;
      this.min -= 60;
    }
    if (this.sec < 10) {
      if (this.min < 10) {
        if (this.hour < 10) {
          this.timer.innerHTML = `0${this.hour}:0${this.min}:0${this.sec}`;
        } else {
          this.timer.innerHTML = `${this.hour}:0${this.min}:0${this.sec}`;
        }
      } else if (this.hour < 10) {
        this.timer.innerHTML = `0${this.hour}:${this.min}:0${this.sec}`;
      } else {
        this.timer.innerHTML = `${this.hour}:${this.min}:0${this.sec}`;
      }
    } else if (this.min < 10) {
      if (this.hour < 10) {
        this.timer.innerHTML = `0${this.hour}:0${this.min}:${this.sec}`;
      } else {
        this.timer.innerHTML = `${this.hour}:0${this.min}:${this.sec}`;
      }
    } else if (this.hour < 10) {
      this.timer.innerHTML = `0${this.hour}:${this.min}:${this.sec}`;
    } else {
      this.timer.innerHTML = `${this.hour}:${this.min}:${this.sec}`;
    }
  }

  showGameOver() {
    this.gameOver = true;
    this.context.fillStyle = 'black';
    this.context.globalAlpha = 0.75;
    this.context.fillRect(0, this.canvas.height / 2 - 30, this.canvas.width, 60);
    this.context.globalAlpha = 1;
    this.context.fillStyle = 'white';
    this.context.font = '36px monospace';
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
    this.context.fillText('GAME OVER!', this.canvas.width / 2, this.canvas.height / 2);
  }
}

const gameField = new GameField();
