document.addEventListener('DOMContentLoaded', initGame);

function initGame() {
    const gameBoard = document.getElementById('game-board');
    const cells = createGameBoard(gameBoard);
    const initialCell = cells[0];
    initialCell.classList.add('snake');
}

function createGameBoard(gameBoard) {
    const cells = [];

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            gameBoard.appendChild(cell);
            cells.push(cell);
        }
    }

    return cells;
}


let restart = document.querySelector(".restart");
let scoreDisplay = document.querySelector(".score");

let currentSnake = [2, 1, 0];
let speed = 0.8;
let width = 10;
let currentIndex = 0;
let appleIndex = 0;
let direction = 1;
let intervalTime = 0;
let interval = 0;




