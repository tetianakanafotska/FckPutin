class Weapon {
  constructor(gameContainer, weaponStr, player) {
    this.gameContainer = gameContainer;
    this.player = player;
    this.element = document.createElement("img");
    this.element.src = `images/${weaponStr}.png`;
    this.element.style.width = 40 + "px";
    this.element.style.position = "absolute";
    this.gameContainer.appendChild(this.element);
    this.top = null;
    this.left = this.player.left;
  }
  updatePosition() {
    this.top = this.player.top;
    this.left += 15;
    this.element.style.top = `${this.top + 80}px`;
    this.element.style.left = `${this.left + 40}px`;
    if (this.left > window.innerWidth) {
      this.element.remove();
    }
  }
}
