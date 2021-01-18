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

    this.gameGridLogic = new GameGrid();

    const playBttn = document.querySelector('.play_button');
    playBttn.addEventListener('click', () => {
      this.playGame();
      this.resetTime()
    });

    this.timer = document.getElementById('timer');
    this.hour = 0;
    this.min = 0;
    this.sec = 0;
    setInterval(() => { this.tick(); }, 1000);
    
  } // end constructor

  playGame() {
    this.gameGridLogic.createGrid();
    this.tetromino = new Tetromino(this.context);
    this.tetromino.drawTetromino();
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
}

const gameFielld = new GameField();
