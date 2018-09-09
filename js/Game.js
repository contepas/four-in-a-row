class Game{
    constructor(){
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false
    }


    //=== GET/SET =========

    /**
     * @return {object} the player object whose active property is equal to true
     */
    get activePlayer(){
        return this.players.find(player => player.active)
    }


    //=== METHODS =========
    
    /**
     * Create 2 players
     * @return {array} an array with 2 player object
     */
    createPlayers(){
        const players = [
            new Player("Player 1", 1, "#e15258", true,),
            new Player("Player 2", 1, "#e59a13")
        ];

        return players;
    }

    /**
     * Start the game
     */
    startGame(){
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }

    /**
    * Branches code, depending on what key player presses
    * @param   {Object}    e - Keydown event object
    */
    handeKeydown(e){
        if(this.ready){
            if(e.key === "ArrowLeft"){
                this.activePlayer.activeToken.moveLeft();
            } else if(e.key === "ArrowRight"){
                this.activePlayer.activeToken.moveRight(this.board.cols);
            } else if(e.key === "ArrowDown"){
                //drop the token in the board

            }
        }
    }
}