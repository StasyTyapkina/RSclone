import { TETROMINOES, COLORS, COLS } from './constants';

export default class Tetromino {
  constructor(context) {
    this.context = context;
    this.tetrominoOrder = [];
    this.extractTetromino();
    this.tetrominoObj = this.getNextTetromino();
  }

  drawTetromino() {
    const gradient = this.context.createLinearGradient(15, 0, 5, 20);
    gradient.addColorStop(0, 'white');
    gradient.addColorStop(1, this.color);
    this.context.fillStyle = gradient;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.context.fillRect(this.col + x, this.row + y, 0.98, 0.98);
        }
      });
    });
  }

  // eslint-disable-next-line class-methods-use-this
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  extractTetromino() {
    const order = ['I', 'J', 'L', 'O', 'S', 'Z', 'T'];

    while (order.length) {
      const randomIndex = this.getRandomInt(0, order.length - 1);
      const tetrominoName = order.splice(randomIndex, 1)[0];
      this.tetrominoOrder.push(tetrominoName);
    }
  }

  getNextTetromino() {
    if (this.tetrominoOrder.length === 0) {
      this.extractTetromino();
    }
    const tetrominoName = this.tetrominoOrder.pop();
    this.shape = TETROMINOES[tetrominoName];
    this.color = COLORS[tetrominoName];
    this.col = COLS / 2 - Math.round(this.shape[0].length / 2);
    this.row = 0;

    return {
      tetrominoName,
      shape: this.shape,
      color: this.color,
      row: this.row,
      col: this.col,
    };
  }

  rotateTetromino() {
    const result = [];
    for (let i = 0; i < this.shape[0].length; i++) {
      const row = this.shape.map((e) => e[i]).reverse();
      result.push(row);
    }
    this.shape = result;
  }
}
