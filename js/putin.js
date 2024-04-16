class Putin {
  constructor(gameContainer) {
    this.gameContainer = gameContainer;
    this.left = window.innerWidth;
    this.top = Math.floor(Math.random() * (window.innerHeight - 400) + 30);
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
      this.top += Math.random() > 0.5 ? 160 : -160;
      if (this.top < 230) {
        this.element.style.top = `${this.top + 300}px`;
      } else if (this.top > window.innerHeight - 100) {
        this.element.style.top = `${this.top - 400}px`;
      } else {
        this.element.style.top = `${this.top}px`;
      }
    }, 2000);
  }
}
