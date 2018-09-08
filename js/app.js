const game = new Game();

const beginGame = document.querySelector('#begin-game');

/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
beginGame.addEventListener('click', () => {
    game.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});