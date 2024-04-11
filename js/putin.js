class Putin {
  constructor(gameContainer) {
    this.gameContainer = gameContainer;
    this.left = this.gameContainer.offsetWidth - 150;
    this.top = Math.floor(
      Math.random() * (this.gameContainer.offsetHeight - 400) + 10
    );
    console.log("This top:", this.top);
    this.element = document.createElement("img");
    this.element.src = "images/putin-rocket.png";
    this.element.style.position = "absolute";
    this.element.style.top = this.top + "px";
    this.element.style.width = 130 + "px";
    this.gameContainer.appendChild(this.element);
    this.animateIDHorizontal = null;
    this.animateIDVertical = null;
  }

  moveHorizontal() {
    this.animateIDHorizontal = window.requestAnimationFrame(() => {
      this.moveHorizontal();
    });
    this.left -= 2;
    this.element.style.left = `${this.left}px`;
    if (this.left < 0) {
      window.cancelAnimationFrame(this.animateIDHorizontal);
      clearInterval(this.animateIDVertical);
    }
  }

  moveVertical() {
    this.animateIDVertical = setInterval(() => {
      this.top += Math.random() > 0.5 ? 20 : -20;
      this.element.style.top = `${this.top}px`;
    }, 2000);
    if (this.top < 10) {
      this.top = 10;
    }
  }
}
