window.addEventListener("load", () => {
  const toiletPaper = document.getElementById("toilet-paper");
  const eggs = document.getElementById("eggs");
  const heart = document.getElementById("heart");
  const restartButton = document.querySelectorAll("#restart-button");
  const introSound = document.getElementById("intro-sound");
  const playButton = document.getElementById("play-sound");
  const playImg = document.getElementById("play-img");
  const weaponImgs = document.querySelectorAll("#weapon-images img");
  const hoverSound = document.getElementById("hoverSound");

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
        game.weapons.push(
          new Weapon(game.gameContainer, weaponStr, game.player)
        );
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
  restartButton.forEach((button) => {
    button.addEventListener("click", () => {
      location.reload();
    });
  });
  playButton.addEventListener("click", () => {
    if (playImg.getAttribute("src") === "../images/play.png") {
      introSound.play();
      playImg.setAttribute("src", "../images/pause.png");
    } else {
      introSound.pause();
      playImg.setAttribute("src", "../images/play.png");
    }
  });
  weaponImgs.forEach((img) => {
    img.addEventListener("mouseover", () => {
      hoverSound.play();
    });
  });
});
