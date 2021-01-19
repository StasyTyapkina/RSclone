/* eslint-disable no-plusplus */
import { COLS, ROWS } from './constants';

export default class GameGrid {
  constructor() {
    this.createGrid();
  }

  createGrid() {
    this.grid = new Array(ROWS);
    for (let i = 0; i < this.grid.length; i++) {
      this.grid[i] = new Array(COLS);
      for (let j = 0; j < this.grid[i].length; j++) {
        this.grid[i][j] = 0;
      }
    }
  }
}
