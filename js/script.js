document.addEventListener('DOMContentLoaded', initGame);

function initGame() {
    const gameBoard = document.getElementById('game-board');
    const cells = createGameBoard(gameBoard);
    
    // Add snake to the initial cell
    const initialCell = cells[0];
    initialCell.classList.add('snake');

    // TODO: Add code for controlling the snake and updating the game state
}

function createGameBoard(gameBoard) {
    const cells = [];

    // Create game board cells
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
