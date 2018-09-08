class Game{
    constructor(){
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false
    }

    /**
     * Create 2 players
     * @return {array} an array with 2 player object
     */
    createPlayers(){
        const players = [
            new Player("Player 1", "#e15258", 1, true,),
            new Player("Player 2", "#e59a13", 1)
        ];

        return players;
    }

    /**
     * @return {object} the player object whose active property is equal to true
     */
    get activePlayer(){
        if(this.players[0].active){
            return this.players[0];
        } else {
            return this.players[1];
        }
    }

    /**
     * Start the game
     * 
     */
    startGame(){

    }
}