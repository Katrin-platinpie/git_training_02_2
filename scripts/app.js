const canvas = document.getElementById("tetris");
const ctx = canvas.getContext("2d");
const scoreboard = document.getElementById("score");
const highScoreboard = document.getElementById("high-score");
const button = document.querySelector(".button");

document.addEventListener("keydown", e => {

});

const _ROW = 20;
const _COL = 10;
const square = 20;
const vacant = "white";
let board = [];
let piece;
let gameOver = false;
let score = 0;
let highScore = localStorage.getItem("tetrisHighScore");
let isRowFull;

const _PIECES = [
  [Z, "#f00000"],
  [S, "#00f000"],
  [T, "#a000f0"],
  [O, "#f0f000"],
  [L, "#f0a000"],
  [I, "#00f0f0"],
  [J, "#0000f0"],
];

for (let row = 0; row < _ROW; row++) {
  board[row] = [];
  for (let col = 0; col < _COL; col++) {
    board[row][col] = vacant;
  }
}

button.addEventListener("click", e => {
  // to Do
});

const randomTetromino = () => {
  //to Do
};

piece = randomTetromino();

const newPiece = () => {
  // to Do
};

const lockTetromino = () => {
  // to Do
};

let dropStart = Date.now();
function drop() {
  // to Do
}

drawBoard();
piece.draw();
drop();
