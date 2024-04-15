class Player {
  constructor(gameContainer, weaponStr, putin) {
    this.gameContainer = gameContainer;
    this.directionY = 0;
    this.directionX = 0;
    this.left = 10;
    this.top = 10;
    this.weaponStr = weaponStr;
    this.element = document.createElement("img");
    this.element.src = "images/player.png";
    this.element.style.position = "absolute";
    this.gameContainer.appendChild(this.element);
    this.animateId = null;
    this.putin = putin;
    this.touchSound = document.getElementById("touch-sound");
  }
  move() {
    this.top += this.directionY;
    this.left += this.directionX;
    this.updatePosition();
    this.meetPutin();
    this.playerOFFBounds();
  }
  meetPutin() {
    const playerCoordinates = this.element.getBoundingClientRect();
    const putinCoordinates = this.putin.element.getBoundingClientRect();
    if (
      playerCoordinates.left < putinCoordinates.right + 20 &&
      playerCoordinates.right > putinCoordinates.left + 20 &&
      playerCoordinates.top < putinCoordinates.bottom + 20 &&
      playerCoordinates.bottom > putinCoordinates.top + 20
    ) {
      this.touchSound.play();
      console.log("touched");
    }
  }
  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }

  playerOFFBounds() {
    if (this.top < 10) {
      this.top = 10;
    }
    if (this.top > this.gameContainer.offsetHeight - 170) {
      this.top = this.gameContainer.offsetHeight - 170;
    }
    if (this.left < 10) {
      this.left = 10;
    }
    if (this.left > this.gameContainer.offsetWidth - 150) {
      this.left = this.gameContainer.offsetWidth - 150;
    }
  }
}
