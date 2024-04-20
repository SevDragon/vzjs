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

player1.move(5, 8);

console.log(player1.x, player1.y);

class Pony {
  get color() {
    console.log("get color");
    return this._color;
  }
  set color(newColor) {
    console.log(`set color ${newColor}`);
    this._color = newColor;
  }
}
const pony = new Pony();
pony.color = "red";
// 'set color red'
console.log(pony.color);
// 'get color'
// 'red'

class Animal {
  speed() {
    return 10;
  }
}
class Pony2 extends Animal {};
const pony2 = new Pony2();
console.log(pony2.speed()); // 10, as Pony inherits the parent method
