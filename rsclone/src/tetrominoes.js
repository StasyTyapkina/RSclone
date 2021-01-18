import { TETROMINOES, COLORS } from './constants';

export default class Tetromino {
  constructor(context) {
    this.context = context;
    this.extractTetromino();

    this.x = 3;
    this.y = 0;
  }

  drawTetromino() {
    this.context.fillStyle = this.color;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.context.fillRect(this.x + x, this.y + y, 1, 1);
        }
      });
    });
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  extractTetromino() {
    const randomIndex = this.getRandomInt(0, TETROMINOES.length - 1);
    this.shape = TETROMINOES[randomIndex];
    this.color = COLORS[randomIndex];
  }

}
