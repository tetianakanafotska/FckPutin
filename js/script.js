window.addEventListener("load", () => {
  const toiletPaper = document.getElementById("toilet-paper");
  const eggs = document.getElementById("eggs");
  const heart = document.getElementById("heart");
  const restartButton = document.getElementById("restart-button");

  let game;

  function startGame(weaponStr) {
    game = new Game(weaponStr);
    game.start();

    document.addEventListener("keydown", (e) => {
      if (e.code === "ArrowRight") {
        e.preventDefault();
        game.player.directionX = 3;
      }
      if (e.code === "ArrowLeft") {
        e.preventDefault();
        game.player.directionX = -3;
      }
      if (e.code === "ArrowUp") {
        e.preventDefault();
        game.player.directionY = -3;
      }
      if (e.code === "ArrowDown") {
        e.preventDefault();
        game.player.directionY = 3;
      }
      if (e.code === "Space") {
        e.preventDefault();
        game.player.weapon.fired = true;
        game.player.weapon.fire();
      }
    });
  }
  toiletPaper.addEventListener("click", () => {
    startGame("toiletPaper");
  });
  eggs.addEventListener("click", () => {
    startGame("eggs");
  });
  heart.addEventListener("click", () => {
    startGame("heart");
  });
});
