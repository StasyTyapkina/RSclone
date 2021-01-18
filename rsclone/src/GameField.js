import { COLS, ROWS, BLOCK_SIZE } from './constants';

export default class GameField{
    constructor(){
        
        const canvas = document.getElementById("canvas");
        const context = canvas.getContext("2d");
    
        context.canvas.width = COLS * BLOCK_SIZE;
        context.canvas.height = ROWS * BLOCK_SIZE;
        context.scale(BLOCK_SIZE, BLOCK_SIZE);

        
        let score = 0;
       
    }

    
}

let gameFielld = new GameField();