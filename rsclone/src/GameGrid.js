/* eslint-disable no-plusplus */
import { COLS, ROWS } from './constants';

export default class GameGrid {
  constructor(context) {
    this.context = context;
    this.createGrid();
  }

  createGrid() {
    this.grid = new Array(ROWS);
    for (let row = 0; row < this.grid.length; row++) {
      this.grid[row] = new Array(COLS);
      for (let col = 0; col < this.grid[row].length; col++) {
        this.grid[row][col] = 0;
      }
    }
  }
}
