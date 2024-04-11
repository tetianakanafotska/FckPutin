class Weapon {
  constructor(gameContainer, weaponStr, player) {
    this.gameContainer = gameContainer;
    this.player = player;
    this.element = document.createElement("img");
    this.element.src = `images/${weaponStr}.png`;
    this.element.style.width = 40 + "px";
    this.element.style.position = "absolute";
    this.gameContainer.appendChild(this.element);
    this.fired = false;
    this.top = null;
    this.left = null;
    this.animateID = null;
  }
  updatePosition() {
    !this.fired ? (this.top = this.player.top) : null;
    !this.fired ? (this.left = this.player.left) : (this.left += 10);
    this.element.style.top = `${this.top + 80}px`;
    this.element.style.left = `${this.left + 40}px`;
  }

  fire() {
    this.element.style.left = `${this.left}px`;
    //console.log(this.left);
    if (this.left > this.gameContainer.offsetWidth) {
      cancelAnimationFrame(this.animateID);
      this.fired = false;
    } else {
      this.animateID = window.requestAnimationFrame(() => {
        this.fire();
      });
    }
  }
  hitPutin(putinElement) {
    const weaponCoordinates = this.element.getBoundingClientRect();
    const putinCoordinates = this.element.getBoundingClientRect();
    if (
      weaponCoordinates.top < putinCoordinates.bottom &&
      weaponCoordinates.bottom > putinCoordinates.top &&
      weaponCoordinates.right > putinCoordinates.left &&
      weaponCoordinates.left < putinCoordinates.right
    ) {
      return true;
    } else {
      return false;
    }
  }
}
