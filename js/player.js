class Player {
  constructor(gameContainer, weapon) {
    this.gameContainer = gameContainer;
    this.directionY = 0;
    this.directionX = 0;
    this.left = 10;
    this.top = 10;
    this.weapon = new Weapon(this.gameContainer, weapon, this);
    this.element = document.createElement("img");
    this.element.src = "images/player.png";
    this.element.style.position = "absolute";
    this.element.style.zIndex = "-2";
    this.gameContainer.appendChild(this.element);
    this.animateId = null;
  }
  move() {
    this.top += this.directionY;
    this.left += this.directionX;
    this.updatePosition();
    this.weapon.updatePosition();
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
    //animate the move
    this.animateId = window.requestAnimationFrame(() => {
      this.move();
    });
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }
}
