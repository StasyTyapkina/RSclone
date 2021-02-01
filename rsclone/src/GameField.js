/* eslint-disable max-len */
/* eslint-disable no-plusplus */
import {
  COLS, ROWS, BLOCK_SIZE, POINTS,
} from './constants';
import GameGrid from './GameGrid';
import Tetromino from './tetrominoes';

export default class GameField {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');
    this.canvas.width = COLS * BLOCK_SIZE;
    this.canvas.height = ROWS * BLOCK_SIZE;
    this.context.scale(BLOCK_SIZE, BLOCK_SIZE);

    this.canvasNext = document.getElementById('mini_canvas');
    this.ctxNext = this.canvasNext.getContext('2d');

    this.ctxNext.canvas.width = 4 * BLOCK_SIZE;
    this.ctxNext.canvas.height = 4 * BLOCK_SIZE;
    this.ctxNext.scale(BLOCK_SIZE, BLOCK_SIZE);

    this.requestID = null;
    this.gameOver = false;
    this.score = 0;
    this.level = 0;
    this.lines = 0;
    this.isPaused = false;

    this.time = {
      start: 0,
      elapsed: 0,
      speed: 1000,
    };

    this.gameGridLogic = new GameGrid(this.context);

    this.playBttn = document.querySelector('.play_button');
    this.pauseBttn = document.querySelector('.pause_button');
    this.restartBttn = document.querySelector('.restart_button');

    this.playBttn.addEventListener('click', () => {
      this.playGame();
      this.restartBttn.style.display = 'block';
    });

    this.pauseBttn.addEventListener('click', () => {
      this.pauseGame();
      this.pauseTime();
    });

    this.restartBttn.addEventListener('click', () => {
      this.stopTime();
      this.playGame();

      if (this.isPaused) {
        this.pauseBttn.innerHTML = 'Pause';
      }
    });

    this.timer = document.getElementById('timer');
    this.hour = 0;
    this.min = 0;
    this.sec = 0;

    this.scoreShow = document.getElementById('score');
    this.levelShow = document.getElementById('level');
    this.linesShow = document.getElementById('lines');

    this.up = document.querySelector('.up');
    this.left = document.querySelector('.left');
    this.right = document.querySelector('.right');
    this.down = document.querySelector('.down');

    this.left.addEventListener('click', () => {
      if (this.isValidMove(this.tetromino.shape, this.tetromino.row, this.tetromino.col - 1)) {
        this.tetromino.col -= 1;
      }
      this.drawNewPosition();
    });

    this.right.addEventListener('click', () => {
      if (this.isValidMove(this.tetromino.shape, this.tetromino.row, this.tetromino.col + 1)) {
        this.tetromino.col += 1;
      }
      this.drawNewPosition();
    });

    this.down.addEventListener('click', () => {
      const row = this.tetromino.row + 1;
      if (!this.isValidMove(this.tetromino.shape, row, this.tetromino.col)) {
        this.tetromino.row = row - 1;
        return;
      }
      this.tetromino.row = row;
      this.drawNewPosition();
    });

    this.up.addEventListener('click', () => {
      this.handleRotate();
    });

    document.addEventListener('keydown', (event) => {
      event.preventDefault();

      if (this.gameOver) return;

      if (event.code === 'ArrowLeft') {
        if (this.isValidMove(this.tetromino.shape, this.tetromino.row, this.tetromino.col - 1)) {
          this.tetromino.col -= 1;
        }
        this.drawNewPosition();
      }
      if (event.code === 'ArrowUp') {
        this.handleRotate();
      }
      if (event.code === 'ArrowRight') {
        if (this.isValidMove(this.tetromino.shape, this.tetromino.row, this.tetromino.col + 1)) {
          this.tetromino.col += 1;
        }
        this.drawNewPosition();
      }
      if (event.code === 'ArrowDown') {
        const row = this.tetromino.row + 1;
        if (!this.isValidMove(this.tetromino.shape, row, this.tetromino.col)) {
          this.tetromino.row = row - 1;
          return;
        }
        this.tetromino.row = row;
        this.drawNewPosition();
      }
      if (event.code === 'Escape') {
        this.pauseGame();
        this.pauseTime();
      }
    });
  } // end constructor

  playGame() {
    this.tetromino = new Tetromino(this.context);
    this.getNewPiece();
    this.gameGridLogic.createGrid();
    this.gameOver = false;
    this.resetTime();
    this.gameLoop();
    this.startTickClock();
    this.playBttn.style.display = 'none';
    this.pauseBttn.style.display = 'block';
  }

  startTickClock() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  stopTime() {
    clearInterval(this.timerID);
  }

  isValidMove(matrix, gridRow, gridCol) {
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        if (matrix[row][col] && (
          gridCol + col < 0
          || gridCol + col >= this.gameGridLogic.grid[0].length
          || gridRow + row >= this.gameGridLogic.grid.length
          || this.gameGridLogic.grid[gridRow + row][gridCol + col])) {
          return false;
        }
      }
    }
    return true;
  }

  handleRotate() {
    const clone = Object.assign(Object.create(Object.getPrototypeOf(this.tetromino)), this.tetromino);

    clone.rotateTetromino();
    if (this.isValidMove(clone.shape, clone.row, clone.col)) {
      this.tetromino.rotateTetromino();
    }
    this.drawNewPosition();
  }

  drawNewPosition() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.tetromino.drawTetromino();
    this.gameGridLogic.drawLastPosition();
  }

  getNewPiece() {
    this.next = new Tetromino(this.ctxNext);
    this.ctxNext.clearRect(0, 0, this.ctxNext.canvas.width, this.ctxNext.canvas.height);
    this.next.col = 0;
    this.next.row = 0;
    this.next.drawTetromino();
  }

  freezeTetromino() {
    for (let row = 0; row < this.tetromino.shape.length; row++) {
      for (let col = 0; col < this.tetromino.shape[row].length; col++) {
        if (this.tetromino.shape[row][col]) {
          if (this.tetromino.row + row <= 0) {
            this.gameOver = true;
            this.showGameOver();
            return;
          }
          if (this.tetromino.shape[row][col] !== 0) {
            // eslint-disable-next-line max-len
            this.gameGridLogic.grid[this.tetromino.row + row][this.tetromino.col + col] = this.tetromino.color;
          }
        }
      }
    }

    this.gameGridLogic.clearRow();
    this.updateScore();
    this.updateLevel();
  }

  gameLoop(now = 0) {
    this.time.elapsed = now - this.time.start;
    if (this.time.elapsed > this.time.speed) {
      this.tetromino.row++;
      this.time.start = now;

      if (!this.isValidMove(this.tetromino.shape, this.tetromino.row, this.tetromino.col)) {
        this.tetromino.row--;

        this.freezeTetromino();

        this.next.getNextTetromino();
        this.tetromino = this.next;
        this.tetromino.context = this.context;
        this.getNewPiece();
      }
    }

    if (this.gameOver !== true) {
      this.drawNewPosition();
      this.requestID = requestAnimationFrame(this.gameLoop.bind(this));
    }
  }

  pauseGame() {
    if (!this.requestID) {
      this.playBttn.style.display = 'none';
      this.pauseBttn.style.display = 'block';
      this.pauseBttn.innerHTML = 'Pause';
      this.gameLoop();
      this.isPaused = false;
      return;
    }
    cancelAnimationFrame(this.requestID);
    this.requestID = null;
    this.isPaused = true;
    this.playBttn.style.display = 'none';
    this.pauseBttn.innerHTML = 'Continue';

    this.showPause();
  }

  showPause() {
    this.context.fillStyle = 'black';
    this.context.fillRect(4, 6, 12, 1.2);
    this.context.font = '1px Verdana';
    this.context.fillStyle = 'red';
    this.context.fillText('PAUSE', 3, 4);
  }

  pauseTime() {
    if (this.isPaused) {
      this.stopTime();
    } else {
      this.startTickClock();
    }
  }

  updateScore() {
    switch (this.gameGridLogic.clearlines) {
      case 1:
        this.score += POINTS.one;
        this.lines += 1;
        break;

      case 2:
        this.score += POINTS.two;
        this.lines += 2;
        break;

      case 3:
        this.score += POINTS.three;
        this.lines += 3;
        break;
      case 4:
        this.score += POINTS.four;
        this.lines += 4;
        break;
      default:
    }
    this.scoreShow.innerHTML = `${this.score}`;
  }

  updateLevel() {
    const checkedLines = 10;
    if (this.lines >= checkedLines) {
      this.level++;
      this.time.speed -= 100;
      this.lines -= checkedLines;
    }

    this.levelShow.innerHTML = `${this.level}`;
    this.linesShow.innerHTML = checkedLines - `${this.lines}`;
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
    cancelAnimationFrame(this.requestID);
    this.gameOver = true;
    this.playBttn.style.display = '';
    this.pauseBttn.style.display = 'none';
    this.restartBttn.style.display = 'none';
    this.stopTime();

    this.context.fillStyle = 'black';
    this.context.fillRect(4, 6, 12, 1.2);
    this.context.font = '1px Verdana';
    this.context.fillStyle = 'white';
    this.context.fillText('GAME OVER', 1.8, 7);
  }
}

const gameField = new GameField();
