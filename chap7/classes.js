class Player {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}

let player1 = new Player(0, 0);

player1.move(5, 8)

console.log(player1.x, player1.y);