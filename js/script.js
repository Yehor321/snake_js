document.addEventListener('DOMContentLoaded', initGame); //calls function initGame which creates the game grid

//buttons
let start = document.querySelector(".start");
let stop1 = document.querySelector(".stop");

//parameters
let score = 0;
let speed = 0;
let free_cells = 0;

//time counter
let game_time_display = document.querySelector(".time");
let game_time_number = 0;
let timerInterval;

//object with all cells
const cells = [];


//function which creates the game grid 10X10
function initGame() {
    const gameBoard = document.getElementById('game-board');
    const cells = createGameBoard(gameBoard);
    const initialCell = cells[0];
    initialCell.classList.add('snake');
}

function createGameBoard(gameBoard) {


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
/////////////////////////////////////////////


//function which creates food on the game grid
function spawn_food(cells){
    let appleIndex;
    do {  
        appleIndex = Math.floor(Math.random() * 100);
      } while (cells[appleIndex].classList.contains("snake"))
      cells[appleIndex].classList.add("food");
}
/////////////////////////////////////////////


//button which starts the game, time counter, spawn snake on the first cell and food on the random cell 
start.addEventListener("click", function(){
    game_time_number = 0;
    console.log("hi");

    timerInterval = setInterval(function() {
        game_time_number++; // Увеличение времени игры
        game_time_display.textContent = game_time_number; // Обновление текста в элементе "time"
    }, 1000);
    spawn_food(cells); // Передача переменной cells в функцию spawn_food
});

/////////////////////////////////////////////


//button which stops time counter
stop1.addEventListener("click", function() {
    clearInterval(timerInterval); // Остановка таймера
    game_time_number = 0; // Сброс времени игры до 0
    game_time_display.textContent = game_time_number; // Обновление текста в элементе "time"
});
/////////////////////////////////////////////