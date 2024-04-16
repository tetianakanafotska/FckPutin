class Game {
  constructor(weaponStr) {
    this.startScreen = document.getElementById("game-intro");
    this.gameContainer = document.getElementById("game-container");
    this.putinDead = document.getElementById("putin-dead");
    this.putinConverted = document.getElementById("putin-converted");
    this.playerLost = document.getElementById("player-lost");
    this.playerLostSound = document.getElementById("playerLost");
    this.introSound = document.getElementById("intro-sound");
    this.touchSound = document.getElementById("touch-sound");
    this.natureSound = document.getElementById("nature-sound");
    this.hitSound = document.getElementById("hit-sound");
    this.putinConvertedSound = document.getElementById("putin-converted-sound");
    this.clapSound = document.getElementById("clapSound");
    this.putin = new Putin(this.gameContainer);
    this.player = new Player(this.gameContainer, this.putin);
    this.gameIsOver = false;
    this.weapons = [];
    this.hitCounter = 0;
    this.weaponStr = weaponStr;
    this.animateId = null;
  }
  start() {
    this.introSound.pause();
    this.natureSound.play();
    this.startScreen.style.display = "none";
    this.gameContainer.style.display = "block";
    this.putin.moveVertical();
    this.putin.moveHorizontal();
    this.gameLoop();
  }
  gameLoop() {
    this.player.move();
    this.handleCollision();
    this.handleGameOutcome();
    if (!this.gameIsOver) {
      this.animateId = window.requestAnimationFrame(() => {
        this.gameLoop();
      });
    }
  }

  handleCollision() {
    for (let i = 0; i < this.weapons.length; i++) {
      this.weapons[i].updatePosition();
      const weaponCoordinates = this.weapons[i].element.getBoundingClientRect();
      const putinCoordinates = this.putin.element.getBoundingClientRect();
      if (
        weaponCoordinates.left < putinCoordinates.right + 50 &&
        weaponCoordinates.right > putinCoordinates.left + 50 &&
        weaponCoordinates.top < putinCoordinates.bottom + 50 &&
        weaponCoordinates.bottom > putinCoordinates.top + 50
      ) {
        this.hitSound.play();
        this.hitCounter++;
        this.weapons[i].element.remove();
        this.changePutinImage();
      }
    }
  }

  changePutinImage() {
    // change Putin image when hit 10 times
    if (this.hitCounter === 10 && this.weaponStr === "heart") {
      this.putin.element.src = "images/putin-rocket-heart-eyes.png";
    }
    if (this.hitCounter === 10 && this.weaponStr === "eggs") {
      this.putin.element.src = "images/putin-rocket-red.png";
    }
    if (this.hitCounter === 10 && this.weaponStr === "toiletPaper") {
      this.putin.element.src = "images/putin-rocket-red.png";
    }
  }

  handleGameOutcome() {
    if (this.hitCounter === 20 && this.weaponStr === "heart") {
      this.gameIsOver = true;
      this.endGame("putinConverted");
    }
    if (this.hitCounter === 20 && this.weaponStr === "eggs") {
      this.gameIsOver = true;
      this.endGame("putinDead");
    }
    if (this.hitCounter === 20 && this.weaponStr === "toiletPaper") {
      this.gameIsOver = true;
      this.endGame("putinDead");
    }
    if (this.putin.left < 0) {
      this.gameIsOver = true;
      this.endGame("playerLost");
      this.playerLostSound.play();
    }
  }

  endGame(outcome) {
    window.cancelAnimationFrame(this.animateId);
    this.gameContainer.style.display = "none";
    if (outcome === "putinConverted") {
      this.natureSound.pause();
      this.putinConvertedSound.play();
      this.putinConverted.style.display = "flex";
    }
    if (outcome === "playerLost") {
      this.natureSound.pause();
      this.playerLost.style.display = "flex";
    }
    if (outcome === "putinDead") {
      this.natureSound.pause();
      this.clapSound.play();
      this.putinDead.style.display = "flex";
    }
  }
}
