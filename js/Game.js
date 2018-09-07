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
}