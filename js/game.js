class Game {
  constructor(weapon) {
    this.startScreen = document.getElementById("game-intro");
    this.gameContainer = document.getElementById("game-container");
    this.gameEnd = document.getElementById("game-end");
    this.player = new Player(this.gameContainer, weapon);
    this.putin = new Putin(this.gameContainer);
    this.isGameOver = false;
  }
  start() {
    this.startScreen.style.display = "none";
    this.gameContainer.style.display = "block";
    this.gameLoop();
  }
  gameLoop() {
    this.player.move();
    this.putin.moveVertical();
    this.putin.moveHorizontal();
  }
}
