class Tetromino {
  constructor(tetromino, color) {
    // to Do
  }

  draw() {
    // to Do
  }
  delete() {
    for(let row = 0; row < this.activeTetromino.length; row++){

      for(let col = 0; col < this.activeTetromino.length; col++){
        if (this.activeTetromino[row][col]) {
          drawSquare(this.x + col, this.y + row, "white");
        }
      }
    }
  }
  collision(x, y, piece) {
    // to Do
  }
  rotate() {
    // to Do
  }
  moveDown() {
    // to Do
    if (!this.collision(0, 1, this.activeTetromino)) {
      this.delete();
      this.y++;
      this.draw();
    }
  }
  moveRight() {
    // to Do
  }
  moveLeft() {
    // to Do
  }
}
