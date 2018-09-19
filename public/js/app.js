const game = new Game();

const beginGame = document.querySelector('#begin-game');
const multiplayer = document.querySelector('#multiplayer');
const loginLogout = document.querySelector('#login-logout');

/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
beginGame.addEventListener('click', function() {
    game.startGame();
    this.style.display = 'none';
    multiplayer.style.display = 'none';
    loginLogout.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});

/** 
 * Listen for keyboard presses
 */

document.addEventListener('keydown', function(event){
    game.handeKeydown(event);
    //console.log(event.key);
});